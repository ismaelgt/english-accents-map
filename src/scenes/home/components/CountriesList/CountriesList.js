import React from 'react'
import { Link } from 'react-router'
import Spinner from '../../../../components/Spinner'
import { selectAccent } from '../AccentsList/actions'
import { selectCountry } from './actions'
import './styles.scss'

const CountriesList = React.createClass({

  componentWillMount () {
    this.props.dispatch(selectCountry(null))
    this.props.dispatch(selectAccent(null))
  },

  render () {
    const { countries, loading } = this.props

    return (
      <div className='eam-card eam-card--countries-list mdl-card mdl-shadow--8dp'>
        { loading ? null
          : <div className='mdl-card__title'>
            <h1 className='mdl-card__title-text'>Select a country and an accent...</h1>
          </div>
        }

        <div className='mdl-card__supporting-text'>
          { loading ? (
            <Spinner />
          ) : (
          <ul className='mdl-list'>
            { countries.orderedIds.map((countryId) => (
              <li key={countryId} className='mdl-list__item' role='button'>
                <Link to={'/' + countryId + '/'} className='eam-card__link'>
                  <span className='mdl-list__item-primary-content'>
                    <img className='mdl-list__item-avatar'
                      src={'/images/flags/' + countryId + '.svg'}
                      alt={countries.byId[countryId].name} />
                    {countries.byId[countryId].name}
                  </span>
                  <span className='mdl-list__item-secondary-action'>
                    <i className='material-icons'>arrow_forward</i>
                  </span>
                </Link>
              </li>
            )) }
          </ul>
          ) }
        </div>
      </div>
    )
  },

  propTypes: {
    countries: React.PropTypes.object,
    loading: React.PropTypes.bool,
    dispatch: React.PropTypes.func
  }

})

export default CountriesList
