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
    this.props.router.push('/' + this.props.countrySelected + '/' + id + '/')
  },

  render () {
    const { countries, accents, countriesLoading, accentsLoading, countrySelected, accentSelected } = this.props
    let header, body, menu, instructions

    if (!countriesLoading && !accentsLoading && countrySelected) {
      const countryAccentsIds = Object.keys(accents.byId).filter(
        (id) => (accents.byId[id].country === countrySelected)
      )

      instructions = (
        <div className='eam-card eam-card--instructions mdl-card mdl-shadow--2dp'>
          <div className='mdl-card__supporting-text'>
            Select a region in <strong>{ countries.byId[countrySelected].name } </strong>
            or <Link to='/'>another country</Link>, or click on one of the map markers.<br />
            You'll see a list of videos showing the English accent spoken there.
          </div>
        </div>
      )

      header = (
        <h3 className='mdl-card__title-text'>
          <img className='mdl-list__item-avatar'
            src={'/images/flags/' + countrySelected + '.svg'} />
          <span>{ countries.byId[countrySelected].name }</span>
        </h3>
      )

      body = (
        <ul className='mdl-list'>
          { countryAccentsIds.map((id) => (
            <li key={id} className='mdl-list__item'>
              <label className='mdl-radio mdl-js-radio mdl-js-ripple-effect'
                htmlFor={'accent-' + id}>
                <input type='radio'
                  id={'accent-' + id}
                  className='mdl-radio__button'
                  checked={accentSelected !== null && accentSelected === id}
                  onChange={() => { this.selectAccent(id) }} />
                <span className='mdl-radio__label'>{accents.byId[id].name}</span>
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
    onSelectCountry: React.PropTypes.func,
    onSelectAccent: React.PropTypes.func,
    onOpenVideos: React.PropTypes.func
  }
})

export default withRouter(AccentsList)
