import React from 'react'
import { objectToArray } from '../../../../services/firebase-structures'
import './styles.scss'

class AccentsList extends React.Component {
  componentDidMount () {
    componentHandler.upgradeDom() // MDL
  }

  render () {
    const { selectedCountry, selectedAccent, onAccentSelected, onClose } = this.props
    const accents = objectToArray(selectedCountry.value.accents)

    return (
      <div className='eam-card-wrapper'>
        <div className='eam-card eam-card--accents-list mdl-card mdl-shadow--2dp'>
          <div className='mdl-card__title'>
            <h3 className='mdl-card__title-text'>
              <img className='mdl-list__item-avatar'
                src={'/images/flags/' + selectedCountry.key + '.svg'} />
              <span>{ selectedCountry.value.name }</span>
            </h3>
          </div>
          <div className='mdl-card__supporting-text'>
            <ul className='mdl-list'>
              {
                accents.map((accent) => (
                  <li key={accent.key} className='mdl-list__item'>
                    <label className='mdl-radio mdl-js-radio mdl-js-ripple-effect'
                      htmlFor={'accent-' + accent.key}>
                      <input type='radio' id={'accent-' + accent.key}
                        className='mdl-radio__button'
                        checked={selectedAccent !== null && selectedAccent.key === accent.key}
                        onChange={() => { onAccentSelected(accent) }} />
                      <span className='mdl-radio__label'>{accent.value.name}</span>
                    </label>
                  </li>
                  ))
              }
            </ul>
          </div>
          <div className='mdl-card__menu'>
            <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'
              onClick={onClose}>
              <i className='material-icons'>close</i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

AccentsList.propTypes = {
  selectedCountry: React.PropTypes.object,
  selectedAccent: React.PropTypes.object,
  onAccentSelected: React.PropTypes.func,
  onClose: React.PropTypes.func
}

export default AccentsList
