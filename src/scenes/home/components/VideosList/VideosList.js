import React from 'react'
import PropTypes from 'prop-types'
import { history } from '../../../../services/location'
import { sendPlayVideoEvent } from '../../../../services/analytics'
import YouTubePlayer from 'youtube-player'
import VideosTitleBar from './VideosTitleBarContainer'
import VideoListButton from './VideoListButton'
import AddToFavoritesButton from './AddToFavoritesButtonContainer'
import ShareButton from './ShareButton'
import './styles.scss'

class VideosList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
    this.initPlayer = this.initPlayer.bind(this)
    this.onPlaylistCued = this.onPlaylistCued.bind(this)
    this.playVideoById = this.playVideoById.bind(this)
    this.closeVideoIfLargeScreen = this.closeVideoIfLargeScreen.bind(this)
    this.updateUrlHash = this.updateUrlHash.bind(this)
    this.nextVideo = this.nextVideo.bind(this)
    this.previousVideo = this.previousVideo.bind(this)
    this.closeVideo = this.closeVideo.bind(this)
  }

  componentDidMount () {
    if (this.props.online) {
      this.initPlayer()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.videos !== this.props.videos) {
      this.setState({ index: 0 })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.videos !== this.props.videos) {
      this.player.cuePlaylist(this.props.videos)
    }
    if (this.props.location.hash && prevProps.location.hash !== this.props.location.hash) {
      const videoId = this.props.location.hash.substring(1)
      this.playVideoById(videoId)
      sendPlayVideoEvent(videoId)
    }
    if (prevState.index !== this.state.index) {
      const videoId = this.props.videos[this.state.index]
      this.updateUrlHash(videoId)
    }
    if (!prevProps.online && this.props.online) {
      this.initPlayer()
    }
  }

  componentWillUnmount () {
    if (this.refs.videoPlayer) {
      this.player.destroy()
    }
  }

  initPlayer () {
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
    if (this.props.location.hash) {
      sendPlayVideoEvent(this.props.location.hash.substring(1))
    }
  }

  onPlaylistCued () {
    if (this.props.location.hash) {
      this.playVideoById(this.props.location.hash.substring(1))
    } else {
      const videoId = this.props.videos[0]
      this.updateUrlHash(videoId)
    }
  }

  playVideoById (id) {
    const videoIndex = this.props.videos.indexOf(id)
    if (videoIndex > -1) {
      this.player.playVideoAt(videoIndex)
    }
  }

  nextVideo (evt) {
    evt.stopPropagation()
    const videoId = this.props.videos[this.state.index + 1]
    this.updateUrlHash(videoId)
  }

  previousVideo (evt) {
    evt.stopPropagation()
    const videoId = this.props.videos[this.state.index - 1]
    this.updateUrlHash(videoId)
  }

  closeVideo (evt) {
    evt.stopPropagation()
    history.push('/' + this.props.countrySelected + '/')
  }

  closeVideoIfLargeScreen (evt) {
    if (!this.props.smallViewport) {
      this.closeVideo(evt)
    }
  }

  updateUrlHash (videoId = null) {
    const hash = videoId ? '#' + videoId : ''
    if (this.props.location.hash !== hash) {
      history.push(this.props.location.pathname + hash)
    }
  }

  render () {
    const { online, videos, accentSelected } = this.props
    const { index } = this.state

    if (!videos || videos.length === 0) {
      return null
    }

    return (
      <div className='videos-list-overlay' onClick={this.closeVideoIfLargeScreen}>
        <div className='videos-list__title-bar-mobile'>
          <VideosTitleBar />
        </div>
        <div className='videos-list'>
          <div className='videos-list__button-container'>
            <VideoListButton
              type='previous'
              index={index}
              total={videos.length}
              onClick={this.previousVideo}
              online={online} />
          </div>
          <div className='videos-list__wrapper'>
            <div className='videos-list__button-container-top'>
              <AddToFavoritesButton id={accentSelected} />
              <button onClick={this.closeVideo}
                className='mdl-button mdl-js-button mdl-button--icon
                videos-list__button videos-list__button--close'>
                <i className='material-icons'>close</i>
              </button>
            </div>
            { online ? (
              <div key='video-player' className='videos-list__wrapper-inner'>
                <div ref='videoPlayer' />
              </div>
            ) : (
              <div key='no-video'
                className='videos-list__wrapper-inner videos-list__wrapper-inner--offline'>
                Sorry, it seems that you are offline. You can't see videos now but you
                can add this accent to your favorites list by using the heart button
                and see the videos later.
              </div>
            )}
          </div>
          <div className='videos-list__button-container'>
            <VideoListButton
              type='next'
              index={index}
              total={videos.length}
              onClick={this.nextVideo}
              online={online} />
          </div>
        </div>
        <div className='videos-list__button-container-mobile'>
          <VideoListButton
            type='previous'
            index={index}
            total={videos.length}
            onClick={this.previousVideo}
            online={online} />
          <ShareButton />
          <AddToFavoritesButton id={accentSelected} />
          <VideoListButton
            type='next'
            index={index}
            total={videos.length}
            onClick={this.nextVideo}
            online={online} />
        </div>
      </div>
    )
  }
}

VideosList.propTypes = {
  smallViewport: PropTypes.bool,
  online: PropTypes.bool,
  videos: PropTypes.array,
  location: PropTypes.object,
  countrySelected: PropTypes.string,
  accentSelected: PropTypes.string
}

export default VideosList
