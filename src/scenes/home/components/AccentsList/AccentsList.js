import React from 'react'
import { Link, withRouter, browserHistory } from 'react-router'
import DocumentTitle from 'react-document-title'
import makeDocumentTitle from '../../../../services/documentTitle'
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
    const { countries, accents, countriesLoading, accentsLoading, countrySelected,
      accentSelected, accentIds, videosOpen } = this.props
    let header, body, menu, docTitle

    if (!countriesLoading && !accentsLoading && countrySelected) {
      docTitle = accentSelected && videosOpen
        ? accents.byId[accentSelected].name + ' - ' + countries.byId[countrySelected].name
        : countries.byId[countrySelected].name

      header = (
        <h2 className='mdl-card__title-text'>
          <img className='mdl-list__item-avatar'
            src={'/images/flags/' + countrySelected + '.svg'} />
          <span>{ countries.byId[countrySelected].name }</span>
        </h2>
      )

      body = (
        <ul className='mdl-list'>
          { accentIds.map((id) => (
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
      docTitle = null

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
      <div>
        <DocumentTitle title={makeDocumentTitle(docTitle)} />
        <div className='eam-card eam-card--accents-list mdl-card mdl-shadow--8dp'>
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
    accentIds: React.PropTypes.array,
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
