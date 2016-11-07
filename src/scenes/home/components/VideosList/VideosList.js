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
          mdl-js-ripple-effect videos-list__button--next'
        disabled={index >= videos.length - 1}>
        <i className='material-icons'>keyboard_arrow_right</i>
      </button>
    )
    const previousButton = (
      <button onClick={(e) => { e.stopPropagation(); onPreviousVideo() }}
        className='mdl-button mdl-js-button mdl-button--fab videos-list__button
          mdl-js-ripple-effect videos-list__button--previous'
        disabled={index === 0}>
        <i className='material-icons'>keyboard_arrow_left</i>
      </button>
    )
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
          <div className='eam-card eam-card--intro mdl-card mdl-shadow--2dp'>
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
            { index > 0 ? previousButton : null }
          </div>
          <div className='videos-list__wrapper'>
            { closeButtonDesktop }
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
        <div className='videos-list__button-container--mobile'>
          { previousButton }{ nextButton }{ closeButtonMobile }
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
