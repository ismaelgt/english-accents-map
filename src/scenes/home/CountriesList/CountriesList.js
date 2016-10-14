import React from 'react'
import { Link } from 'react-router'
import './styles.scss'

export const CountriesList = ({ countries }) => (
  <div className='mdl-card mdl-shadow--2dp countries-list'>
    {
      countries.loading
      ? <div className='mdl-card__supporting-text'>
        <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' />
      </div>
      : <ul className='mdl-card__supporting-text demo-list-item mdl-list'>
        {
          Object.keys(countries.data).map((key) => (
            <li key={key} className='mdl-list__item'>
              <Link to='/about' className='mdl-link'>
                <span className='mdl-list__item-primary-content'>
                  <img className='mdl-list__item-avatar' src={'/images/flags/' + key + '.svg'} />
                  {countries.data[key].name}
                </span>
              </Link>
            </li>
          ))
        }
      </ul>
    }
  </div>
)

CountriesList.propTypes = {
  countries: React.PropTypes.object
}

export default CountriesList
