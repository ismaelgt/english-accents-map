import React from 'react'
import { Link } from 'react-router'
import { selectAccent } from '../AccentsList/actions'
import './styles.scss'

const CountriesList = React.createClass({

  componentDidMount () {
    this.props.dispatch(selectAccent(null))
    componentHandler.upgradeDom() // MDL
  },

  render () {
    const { countries, loading } = this.props

    const loadingIndicator = (
      <div className='loading-indicator'>
        <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' />
      </div>
    )

    const countriesList = (
      <ul className='mdl-list'>
        { countries.orderedIds.map((countryId) => (
          <li key={countryId} className='mdl-list__item' role='button'>
            <Link to={'/' + countryId + '/'} className='mdl-list__item-primary-content'>
              <img className='mdl-list__item-avatar' src={'/images/flags/' + countryId + '.svg'} />
              {countries.byId[countryId].name}
            </Link>
          </li>
        )) }
      </ul>
    )

    return (
      <div className='eam-card-wrapper'>
        <div className='eam-card eam-card--countries-list mdl-card mdl-shadow--2dp'>
          <div className='mdl-card__title'>
            <h2 className='mdl-card__title-text'>
              { loading ? 'Loading Countries...' : 'Select Country' }
            </h2>
          </div>
          <div className='mdl-card__supporting-text'>
            { loading ? loadingIndicator : countriesList }
          </div>
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
