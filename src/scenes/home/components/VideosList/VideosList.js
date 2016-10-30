import React from 'react'
import './styles.scss'

const VideosList = React.createClass({
  render () {
    const { videos, index, onNextVideo, onPreviousVideo, onCloseVideo } = this.props

    if (!videos || videos.length === 0) {
      return null
    }

    const nextButton = (
      <button onClick={(e) => { e.stopPropagation(); onNextVideo() }}
        className='mdl-button mdl-js-button mdl-button--fab videos-list__button
          mdl-js-ripple-effect videos-list__button--next'>
        <i className='material-icons'>keyboard_arrow_right</i>
      </button>
    )
    const previousButton = (
      <button onClick={(e) => { e.stopPropagation(); onPreviousVideo() }}
        className='mdl-button mdl-js-button mdl-button--fab videos-list__button
          mdl-js-ripple-effect videos-list__button--previous'>
        <i className='material-icons'>keyboard_arrow_left</i>
      </button>
    )
    return (
      <div className='videos-list-overlay'
        onClick={onCloseVideo}>
        <div className='videos-list'>
          <div className='videos-list__button-container'>
            { index > 0 ? previousButton : null }
          </div>
          <div className='videos-list__wrapper'>
            <button className='mdl-button mdl-js-button mdl-button--icon
              videos-list__button videos-list__button--close'
              onClick={(e) => { e.stopPropagation(); onCloseVideo() }}>
              <i className='material-icons'>close</i>
            </button>
            <iframe
              width='100%'
              height='100%'
              src={`https://www.youtube.com/embed/${videos[index]}/`}
              frameBorder='0' />
          </div>
          <div className='videos-list__button-container'>
            { index < videos.length - 1 ? nextButton : null }
          </div>
        </div>
      </div>
    )
  },
  propTypes: {
    videos: React.PropTypes.array,
    index: React.PropTypes.number,
    onNextVideo: React.PropTypes.func,
    onPreviousVideo: React.PropTypes.func,
    onCloseVideo: React.PropTypes.func
  }
})

export default VideosList
