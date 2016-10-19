import React from 'react'
import './styles.scss'

class CountriesList extends React.Component {
  componentDidMount () {
    componentHandler.upgradeDom() // MDL
  }

  render () {
    const { countries, onCountrySelected } = this.props

    const loadingIndicator = (
      <div className='loading-indicator'>
        <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' />
      </div>
    )

    const countriesList = (
      <ul className='mdl-list'>
        { countries.items.map((country) => (
          <li key={country.key} className='mdl-list__item' role='button'
            onClick={() => onCountrySelected(country)}>
            <span className='mdl-list__item-primary-content'>
              <img className='mdl-list__item-avatar' src={'/images/flags/' + country.key + '.svg'} />
              {country.name}
            </span>
          </li>
        )) }
      </ul>
    )

    return (
      <div className='eam-card-wrapper'>
        <div className='eam-card eam-card--countries-list mdl-card mdl-shadow--2dp'>
          <div className='mdl-card__title'>
            <h2 className='mdl-card__title-text'>
              { countries.loading ? 'Loading Countries...' : 'Select Country' }
            </h2>
          </div>
          <div className='mdl-card__supporting-text'>
            { countries.loading ? loadingIndicator : countriesList }
          </div>
        </div>
      </div>
    )
  }

}

CountriesList.propTypes = {
  countries: React.PropTypes.object,
  onCountrySelected: React.PropTypes.func
}

export default CountriesList
