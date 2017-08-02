import React from 'react'
import PropTypes from 'prop-types'
import { history } from '../../../../services/location'

class VideosTitleBar extends React.Component {
  constructor (props) {
    super(props)
    this.closeVideo = this.closeVideo.bind(this)
  }

  closeVideo (evt) {
    const { accents, accentSelected } = this.props

    evt.stopPropagation()
    history.push('/' + accents.byId[accentSelected].country + '/')
  }

  render () {
    const { accents, accentSelected } = this.props
    return (
      <div className='eam-card-wrapper'>
        <div className='eam-card mdl-card mdl-shadow--8dp'>
          <div className='mdl-card__title'>
            <img className='mdl-list__item-avatar'
              src={'/images/flags/' + accents.byId[accentSelected].country + '.svg'}
              alt={accents.byId[accentSelected].country} />
            <h2 className='mdl-card__title-text'>
              { accents.byId[accentSelected].name }
            </h2>
          </div>
          <div className='mdl-card__menu'>
            <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'
              onClick={this.closeVideo}>
              <i className='material-icons'>arrow_back</i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

VideosTitleBar.propTypes = {
  accents: PropTypes.object,
  accentSelected: PropTypes.string
}

export default VideosTitleBar
