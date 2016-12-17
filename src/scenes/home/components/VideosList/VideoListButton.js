import React from 'react'

const VideoListButton = ({ type, index, total, onClick, online }) => {
  return (
    <button onClick={onClick}
      className={'mdl-button mdl-js-button mdl-button--fab videos-list__button ' +
        'mdl-js-ripple-effect videos-list__button--' + type}
      disabled={!online || index === 0 && type === 'previous' || index === total - 1 && type === 'next'}>
      <i className='material-icons'>{ type === 'previous' ? 'keyboard_arrow_left' : 'keyboard_arrow_right'}</i>
    </button>
  )
}

VideoListButton.propTypes = {
  type: React.PropTypes.string,
  index: React.PropTypes.number,
  total: React.PropTypes.number,
  onClick: React.PropTypes.func,
  online: React.PropTypes.bool
}

export default VideoListButton
