import React from 'react'
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
    // Update index when player state changes
    this.player.addEventListener('onStateChange', () => {
      this.player.getPlaylistIndex().then((index) => {
        this.setState({ index: index })
      })
    })
    this.player.cuePlaylist(this.props.videos)
  },

  componentWillReceiveProps (nextProps) {
    if (nextProps.videos !== this.props.videos) {
      this.player.cuePlaylist(nextProps.videos)
    }
  },

  componentWillUnmount () {
    this.player.destroy()
  },

  nextVideo () {
    this.player.nextVideo()
  },

  previousVideo () {
    this.player.previousVideo()
  },

  render () {
    const { videos, onCloseVideo } = this.props
    const { index } = this.state

    if (!videos || videos.length === 0) {
      return null
    }

    const closeButtonDesktop = (
      <button onClick={(e) => { e.stopPropagation(); onCloseVideo() }}
        className='mdl-button mdl-js-button mdl-button--icon
        videos-list__button videos-list__button--close'>
        <i className='material-icons'>close</i>
      </button>
    )
    const closeButtonMobile = (
      <button onClick={(e) => { e.stopPropagation(); onCloseVideo() }}
        className='mdl-button mdl-js-button mdl-button--fab videos-list__button
          mdl-js-ripple-effect'>
        <i className='material-icons'>close</i>
      </button>
    )

    return (
      <div className='videos-list-overlay'
        onClick={onCloseVideo}>
        <div className='eam-card-wrapper videos-list__intro--mobile'>
          <div className='eam-card eam-card--intro mdl-card mdl-shadow--8dp'>
            <div className='mdl-card__supporting-text'>
              <p className='intro__text'>
                <span>Use the arrows to navigate through the accent videos or click on the
                cross to select a different region.</span>
              </p>
            </div>
          </div>
        </div>
        <div className='videos-list'>
          <div className='videos-list__button-container'>
            <VideoListButton
              type='previous'
              index={index}
              total={videos.length}
              onClick={(e) => { e.stopPropagation(); this.previousVideo() }} />
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
              onClick={(e) => { e.stopPropagation(); this.nextVideo() }} />
          </div>
        </div>
        <div className='videos-list__button-container--mobile'>
          <VideoListButton
            type='previous'
            index={index}
            total={videos.length}
            onClick={(e) => { e.stopPropagation(); this.previousVideo() }} />
          <VideoListButton
            type='next'
            index={index}
            total={videos.length}
            onClick={(e) => { e.stopPropagation(); this.nextVideo() }} />
          { closeButtonMobile }
        </div>
      </div>
    )
  },
  propTypes: {
    videos: React.PropTypes.array,
    onCloseVideo: React.PropTypes.func
  }
})

export default VideosList
