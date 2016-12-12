import React from 'react'

const VideosTitleBar = ({ accents, accentSelected, selectAccent }) => {
  return (
    <div className='eam-card-wrapper'>
      <div className='eam-card eam-card--accents-list mdl-card mdl-shadow--8dp'>
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
            onClick={() => selectAccent(null)}>
            <i className='material-icons'>arrow_back</i>
          </button>
        </div>
      </div>
    </div>
  )
}

VideosTitleBar.propTypes = {
  accents: React.PropTypes.object,
  accentSelected: React.PropTypes.string,
  countrySelected: React.PropTypes.string,
  selectAccent: React.PropTypes.func
}

export default VideosTitleBar
