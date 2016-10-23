import React from 'react'
import { Link, withRouter, browserHistory } from 'react-router'
import { objectToArray } from '../../../../services/firebase-structures'
import './styles.scss'

const AccentsList = React.createClass({

  componentDidMount () {
    componentHandler.upgradeDom() // MDL
    if (!this.props.countries.loading) {
      this.loadFromUrl(this.props.countries)
    }
  },

  componentWillReceiveProps (nextProps) {
    if (!nextProps.countries.loading && this.props.countries.loading) {
      this.loadFromUrl(nextProps.countries)
    }
  },

  // Always make sure countries are loaded and country is selected when updating
  shouldComponentUpdate (nextProps) {
    return !nextProps.countries.loading && nextProps.countries.selected
  },

  componentDidUpdate () {
    componentHandler.upgradeDom() // MDL
  },

  loadFromUrl (countries) {
    const { params } = this.props
    const country = countries.items.find(
      (item) => (item.key === params.countryId)
    )
    if (country) {
      this.props.onSelectCountry(country)
      if (params.accentId) {
        const accent = country.value.accents[params.accentId]
        if (accent) {
          this.props.onSelectAccent({ key: params.accentId, value: accent })
        } else {
          browserHistory.push('/' + country.key + '/') // TODO: Show a 404 here
        }
      }
    } else {
      browserHistory.push('/') // TODO: Show a 404 here
    }
  },

  selectAccent (accent) {
    this.props.onSelectAccent(accent)
    this.props.router.push('/' + this.props.countries.selected.key + '/' + accent.key + '/')
  },

  render () {
    const { countries } = this.props
    let accents = []
    let header, body, menu

    if (!countries.loading && countries.selected) {
      accents = objectToArray(countries.selected.value.accents)

      header = (
        <h3 className='mdl-card__title-text'>
          <img className='mdl-list__item-avatar'
            src={'/images/flags/' + countries.selected.key + '.svg'} />
          <span>{ countries.selected.value.name }</span>
        </h3>
      )

      body = (
        <ul className='mdl-list'>
          { accents.map((accent) => (
            <li key={accent.key} className='mdl-list__item'>
              <label className='mdl-radio mdl-js-radio mdl-js-ripple-effect'
                htmlFor={'accent-' + accent.key}>
                <input type='radio' id={'accent-' + accent.key}
                  className='mdl-radio__button'
                  checked={countries.selectedAccent !== null && countries.selectedAccent.key === accent.key}
                  onChange={() => { this.selectAccent(accent) }} />
                <span className='mdl-radio__label'>{accent.value.name}</span>
              </label>
            </li>
            )
          ) }
        </ul>
      )

      menu = (
        <Link className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'
          to={'/'}>
          <i className='material-icons'>close</i>
        </Link>
      )
    } else {
      header = (
        <h3 className='mdl-card__title-text'>Loading...</h3>
      )

      body = (
        <div className='loading-indicator'>
          <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' />
        </div>
      )
      menu = null
    }

    return (
      <div className='eam-card-wrapper'>
        <div className='eam-card eam-card--accents-list mdl-card mdl-shadow--2dp'>
          <div className='mdl-card__title'>{ header }</div>
          <div className='mdl-card__supporting-text'>{ body }</div>
          <div className='mdl-card__menu'>{ menu }</div>
        </div>
      </div>
    )
  },

  propTypes: {
    params: React.PropTypes.object,
    router: React.PropTypes.object,
    countries: React.PropTypes.object,
    onSelectCountry: React.PropTypes.func,
    onSelectAccent: React.PropTypes.func
  }
})

export default withRouter(AccentsList)
