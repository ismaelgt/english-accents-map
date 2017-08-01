import React from 'react'

class ShareButton extends React.Component {
  share (evt) {
    evt.stopPropagation()
    navigator.share({
      title: document.title,
      url: window.location.href
    })
  }

  render () {
    // Just experimenting with this so no graceful degradation for now
    if (navigator.share === undefined) {
      return null
    }

    return (
      <div>
        <button className='mdl-button mdl-js-button mdl-button--icon videos-list__button-share'
          onClick={this.share}>
          <i className='material-icons'>share</i>
        </button>
      </div>
    )
  }
}

export default ShareButton
