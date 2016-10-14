import React from 'react'
import { Link } from 'react-router'
import './styles.scss'

export const CountriesList = ({ countries }) => (
  <div className='mdl-card mdl-shadow--2dp countries-list'>
    <div className='mdl-card__title'>
      <h2 className='mdl-card__title-text'>Select Country</h2>
    </div>
    <div className='mdl-card__supporting-text'>
      { countries.loading
          ? <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' />
          : '' }
      <ul className='mdl-list'>
        { countries.data.map((country) => (
          <li key={country.key} className='mdl-list__item'>
            <Link to='/about' className='mdl-link'>
              <span className='mdl-list__item-primary-content'>
                <img className='mdl-list__item-avatar' src={'/images/flags/' + country.key + '.svg'} />
                {country.name}
              </span>
            </Link>
          </li>
        )) }
      </ul>
    </div>
  </div>
)

CountriesList.propTypes = {
  countries: React.PropTypes.object
}

export default CountriesList
