import React from 'react'
import { Link } from 'react-router'
import './styles.scss'

const CountriesList = React.createClass({

  componentDidMount () {
    componentHandler.upgradeDom() // MDL
  },

  render () {
    const { countries, loading } = this.props

    const loadingIndicator = (
      <div className='loading-indicator'>
        <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' />
      </div>
    )

    const instructions = (
      <div className='eam-card eam-card--intro mdl-card mdl-shadow--2dp'>
        <div className='mdl-card__supporting-text'>
          <h1 className='intro__title'>Watch English accents videos</h1>
          <p className='intro__text'>
            Start by selecting a country and a region or by clicking on one of the map markers.
          </p>
        </div>
      </div>
    )

    const countriesList = (
      <ul className='mdl-list'>
        { countries.orderedIds.map((countryId) => (
          <li key={countryId} className='mdl-list__item' role='button'>
            <Link to={'/' + countryId + '/'} className='eam-card__link'>
              <span className='mdl-list__item-primary-content'>
                <img className='mdl-list__item-avatar' src={'/images/flags/' + countryId + '.svg'} />
                {countries.byId[countryId].name}
              </span>
              <span className='mdl-list__item-secondary-action'>
                <i className='material-icons'>arrow_forward</i>
              </span>
            </Link>
          </li>
        )) }
      </ul>
    )

    return (
      <div className='eam-card-wrapper'>
        { loading ? null : instructions }
        <div className='eam-card eam-card--countries-list mdl-card mdl-shadow--2dp'>
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
