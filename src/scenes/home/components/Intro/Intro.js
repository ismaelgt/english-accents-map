import React from 'react'
import './styles.scss'

class Intro extends React.Component {
  render () {
    return (
      <div className='eam-card eam-card--intro mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__supporting-text'>
          <h1 className='intro__title'>Watch English accent videos</h1>
          <p className='intro__text'>
            Select a country and an accent or use the map. Then, use the arrows to watch the videos.
          </p>
        </div>
        <div className='mdl-card__actions'>
          <button className='intro__button mdl-button mdl-js-button mdl-button--colored'>
            OK, got it!
          </button>
        </div>
      </div>
    )
  }
}

export default Intro
