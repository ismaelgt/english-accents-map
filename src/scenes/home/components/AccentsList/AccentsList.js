import React from 'react'
import { Link, withRouter, browserHistory } from 'react-router'
import './styles.scss'

const AccentsList = React.createClass({

  componentDidMount () {
    componentHandler.upgradeDom() // MDL
    this.loadFromUrl()
  },

  componentDidUpdate (prevProps) {
    componentHandler.upgradeDom() // MDL
    if (!this.props.countrySelected || prevProps.params.accentId !== this.props.params.accentId) {
      this.loadFromUrl()
    }
  },

  loadFromUrl () {
    const { params, countries, accents, countriesLoading, accentsLoading,
      countrySelected, onSelectCountry, onSelectAccent, onOpenVideos } = this.props

    if (countriesLoading || accentsLoading) {
      return
    }

    const country = countries.byId[params.countryId]
    if (country) {
      onSelectCountry(params.countryId)
      if (params.accentId) {
        const accent = accents.byId[params.accentId]
        if (accent) {
          onSelectAccent(params.accentId)
          if (accent.videos && accent.videos.length) {
            onOpenVideos()
          }
        } else {
          // TODO: Show a 404 here
          browserHistory.push('/' + countrySelected + '/')
        }
      }
    } else {
      // TODO: Show a 404 here
      browserHistory.push('/')
    }
  },

  selectAccent (id) {
    if (this.props.accentSelected === id) {
      this.props.onOpenVideos()
    } else {
      browserHistory.push('/' + this.props.countrySelected + '/' + id + '/')
    }
  },

  render () {
    const { countries, accents, countriesLoading, accentsLoading,
      countrySelected, accentSelected, videosOpen } = this.props
    let header, body, menu, instructions

    if (!countriesLoading && !accentsLoading && countrySelected) {
      const countryAccentsIds = Object.keys(accents.byId).filter(
        (id) => (accents.byId[id].country === countrySelected)
      )

      instructions = (
        <div className='eam-card eam-card--intro mdl-card mdl-shadow--2dp'>
          <div className='mdl-card__supporting-text'>
            <h1 className='intro__title'>Watch English accents videos</h1>
            <p className='intro__text'>
              Select a region in { countries.byId[countrySelected].name } or <Link to='/'>another country</Link>,
              or click on one of the map markers.
            </p>
          </div>
        </div>
      )

      header = (
        <h2 className='mdl-card__title-text'>
          <img className='mdl-list__item-avatar'
            src={'/images/flags/' + countrySelected + '.svg'} />
          <span>{ countries.byId[countrySelected].name }</span>
        </h2>
      )

      body = (
        <ul className='mdl-list'>
          { countryAccentsIds.map((id) => (
            <li key={id} className='mdl-list__item'>
              <div
                className={'eam-card__link' + ((accentSelected === id && videosOpen) ? ' eam-card__link--active' : '')}
                onClick={() => { this.selectAccent(id) }}>
                <span className='mdl-list__item-primary-content'>
                  {accents.byId[id].name}
                </span>
                <span className='mdl-list__item-secondary-action'>
                  <i className='material-icons'>play_circle_outline</i>
                </span>
              </div>
            </li>
            )
          ) }
        </ul>
      )

      menu = (
        <Link className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'
          to={'/'}>
          <i className='material-icons'>arrow_back</i>
        </Link>
      )
    } else {
      instructions = null

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
        { instructions }
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
    accents: React.PropTypes.object,
    countriesLoading: React.PropTypes.bool,
    accentsLoading: React.PropTypes.bool,
    countrySelected: React.PropTypes.string,
    accentSelected: React.PropTypes.string,
    videosOpen: React.PropTypes.bool,
    onSelectCountry: React.PropTypes.func,
    onSelectAccent: React.PropTypes.func,
    onOpenVideos: React.PropTypes.func
  }
})

export default withRouter(AccentsList)
