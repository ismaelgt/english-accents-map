import React from 'react'
import './styles.scss'

class AccentsList extends React.Component {
  componentDidMount () {
    componentHandler.upgradeDom() // MDL
  }

  render () {
    return (
      <div className='eam-card-wrapper'>
        <div className='eam-card eam-card--accents-list mdl-card mdl-shadow--2dp'>
          <div className='mdl-card__title'>
            <h3 className='mdl-card__title-text'>
              <img className='mdl-list__item-avatar' src='/images/flags/gb.svg' />
              <span>United Kingdom</span>
            </h3>
          </div>
          <div className='mdl-card__supporting-text'>
            <ul className='mdl-list'>
              <li key='manchester' className='mdl-list__item'>
                <label className='mdl-radio mdl-js-radio mdl-js-ripple-effect' htmlFor='option-1'>
                  <input type='radio' id='option-1' className='mdl-radio__button'
                    name='options' value='1' defaultChecked />
                  <span className='mdl-radio__label'>Manchester</span>
                </label>
              </li>
              <li key='bristol' className='mdl-list__item'>
                <label className='mdl-radio mdl-js-radio mdl-js-ripple-effect' htmlFor='option-2'>
                  <input type='radio' id='option-2' className='mdl-radio__button' name='options' value='2' />
                  <span className='mdl-radio__label'>Bristol</span>
                </label>
              </li>
            </ul>
          </div>
          <div className='mdl-card__menu'>
            <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'>
              <i className='material-icons'>close</i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default AccentsList
