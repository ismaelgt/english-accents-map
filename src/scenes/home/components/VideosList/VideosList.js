import React from 'react'
import { browserHistory } from 'react-router'
import ReactGA from 'react-ga'
import YouTubePlayer from 'youtube-player'
import VideoListButton from './VideoListButton'
import './styles.scss'

const VideosList = React.createClass({
  getInitialState () {
    return {
      index: 0
    }
  },

  componentDidMount () {
    this.player = YouTubePlayer(this.refs.videoPlayer, {
      height: '100%',
      width: '100%'
    })

    this.player.addEventListener('onStateChange', (evt) => {
      // Update index when player state changes
      this.player.getPlaylistIndex().then((index) => {
        this.setState({ index: index })
      })
      // Play list when cued
      if (evt.data === 5) {
        this.onPlaylistCued()
      }
    })
    this.player.cuePlaylist(this.props.videos)
  },

  componentWillReceiveProps (nextProps) {
    if (nextProps.videos !== this.props.videos) {
      this.setState({ index: 0 })
    }
  },

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.videos !== this.props.videos) {
      this.player.cuePlaylist(this.props.videos)
    }
    if (prevProps.location.hash !== this.props.location.hash) {
      this.playVideoById(this.props.location.hash.substring(1))
    }
    if (prevState.index !== this.state.index) {
      const videoId = this.props.videos[this.state.index]
      this.updateUrlHash(videoId)
    }
  },

  componentWillUnmount () {
    this.player.destroy()
  },

  onPlaylistCued () {
    if (this.props.location.hash) {
      this.playVideoById(this.props.location.hash.substring(1))
    } else {
      const videoId = this.props.videos[0]
      this.playVideoById(videoId)
      this.updateUrlHash(videoId)
    }
  },

  playVideoById (id) {
    const videoIndex = this.props.videos.indexOf(id)
    if (videoIndex > -1) {
      this.player.playVideoAt(videoIndex)
    } else {
      this.updateUrlHash(null)
    }
  },

  nextVideo (evt) {
    evt.stopPropagation()
    const videoId = this.props.videos[this.state.index + 1]
    this.updateUrlHash(videoId)
  },

  previousVideo (evt) {
    evt.stopPropagation()
    const videoId = this.props.videos[this.state.index - 1]
    this.updateUrlHash(videoId)
  },

  closeVideo (evt) {
    evt.stopPropagation()
    this.updateUrlHash()
    this.props.onCloseVideo()
  },

  updateUrlHash (videoId = null) {
    const hash = videoId ? '#' + videoId : ''
    if (this.props.location.hash !== hash) {
      browserHistory.push(this.props.location.pathname + hash)
      if (hash !== '') {
        ReactGA.event({ category: 'Video', action: 'Play', label: videoId })
      }
    }
  },

  render () {
    const { videos } = this.props
    const { index } = this.state

    if (!videos || videos.length === 0) {
      return null
    }

    const closeButtonDesktop = (
      <button onClick={this.closeVideo}
        className='mdl-button mdl-js-button mdl-button--icon
        videos-list__button videos-list__button--close'>
        <i className='material-icons'>close</i>
      </button>
    )
    const closeButtonMobile = (
      <button onClick={this.closeVideo}
        className='mdl-button mdl-js-button mdl-button--fab videos-list__button
          mdl-js-ripple-effect'>
        <i className='material-icons'>close</i>
      </button>
    )

    return (
      <div className='videos-list-overlay' onClick={this.closeVideo}>
        <div className='videos-list'>
          <div className='videos-list__button-container'>
            <VideoListButton
              type='previous'
              index={index}
              total={videos.length}
              onClick={this.previousVideo} />
          </div>
          <div className='videos-list__wrapper'>
            { closeButtonDesktop }
            <div ref='videoPlayer' />
          </div>
          <div className='videos-list__button-container'>
            <VideoListButton
              type='next'
              index={index}
              total={videos.length}
              onClick={this.nextVideo} />
          </div>
        </div>
        <div className='videos-list__button-container--mobile'>
          <VideoListButton
            type='previous'
            index={index}
            total={videos.length}
            onClick={this.previousVideo} />
          <VideoListButton
            type='next'
            index={index}
            total={videos.length}
            onClick={this.nextVideo} />
          { closeButtonMobile }
        </div>
      </div>
    )
  },
  propTypes: {
    videos: React.PropTypes.array,
    location: React.PropTypes.object,
    onCloseVideo: React.PropTypes.func
  }
})

export default VideosList
