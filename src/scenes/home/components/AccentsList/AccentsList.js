import React from 'react'
import './styles.scss'

class AccentsList extends React.Component {
  componentDidMount () {
    componentHandler.upgradeDom() // MDL
  }

  render () {
    const { accents, countries, onClose } = this.props

    return (
      <div className='eam-card-wrapper'>
        <div className='eam-card eam-card--accents-list mdl-card mdl-shadow--2dp'>
          <div className='mdl-card__title'>
            <h3 className='mdl-card__title-text'>
              <img className='mdl-list__item-avatar'
                src={'/images/flags/' + countries.selected + '.svg'} />
              <span>{ countries.items.find((item) => (item.key === countries.selected)).name }</span>
            </h3>
          </div>
          <div className='mdl-card__supporting-text'>
            <ul className='mdl-list'>
              {
                accents.items
                  .filter((item) => (item.country === countries.selected))
                  .map((accent) => (
                    <li key={accent.key} className='mdl-list__item'>
                      <label className='mdl-radio mdl-js-radio mdl-js-ripple-effect'
                        htmlFor={'accent-' + accent.key}>
                        <input type='radio' id={'accent-' + accent.key}
                          className='mdl-radio__button' name='accent' value={accent.key} />
                        <span className='mdl-radio__label'>{accent.name}</span>
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
  accents: React.PropTypes.object,
  countries: React.PropTypes.object,
  onClose: React.PropTypes.func
}

export default AccentsList
