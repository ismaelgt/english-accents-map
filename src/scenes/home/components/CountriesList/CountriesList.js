import React from 'react'
import { Link } from 'react-router'
import { selectAccent } from '../AccentsList/actions'
import { selectCountry } from './actions'
import { CLOSE_VIDEO } from '../VideosList/actions'
import './styles.scss'

const CountriesList = React.createClass({

  componentWillMount () {
    this.props.dispatch(selectCountry(null))
    this.props.dispatch(selectAccent(null))
    this.props.dispatch({ type: CLOSE_VIDEO })
  },

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
      <div className='eam-card eam-card--countries-list mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__supporting-text'>
          { loading ? loadingIndicator : countriesList }
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
