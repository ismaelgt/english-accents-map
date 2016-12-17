import React from 'react'
import { Link, browserHistory } from 'react-router'
import Spinner from '../../../../components/Spinner'
import DocumentTitle from 'react-document-title'
import makeDocumentTitle from '../../../../services/documentTitle'
import { pushAccentUrl } from './actions'
import './styles.scss'

const AccentsList = React.createClass({

  componentDidMount () {
    this.loadCountryAndAccentFromUrl()
  },

  componentDidUpdate (prevProps) {
    if (!this.props.countrySelected ||
      prevProps.params.accentId !== this.props.params.accentId) {
      this.loadCountryAndAccentFromUrl()
    }
  },

  loadCountryAndAccentFromUrl () {
    const { params, countries, accents, loading, countrySelected, accentSelected,
      onSelectCountry, onSelectAccent } = this.props

    if (loading) {
      return
    }

    // Load country
    if (params.countryId !== countrySelected) {
      const country = countries.byId[params.countryId]
      if (!country) {
        browserHistory.push('/') // TODO: 404?
        return
      }
      onSelectCountry(params.countryId)
    }

    // Load accent
    if (params.accentId !== accentSelected) {
      if (params.accentId) {
        const accent = accents.byId[params.accentId]
        if (!accent) {
          browserHistory.push('/' + countrySelected + '/') // TODO: 404?
          return
        }
      }
      onSelectAccent(params.accentId || null)
    }
  },

  selectAccent (id) {
    if (this.props.accentSelected !== id) {
      pushAccentUrl(id, this.props.accents)
    }
  },

  render () {
    const { countries, accents, loading, countrySelected, accentSelected,
      regionAccentIds, countryAccentIds } = this.props
    let header, body, menu, docTitle

    if (!loading && countrySelected) {
      docTitle = accentSelected
        ? accents.byId[accentSelected].name + ' - ' + countries.byId[countrySelected].name
        : countries.byId[countrySelected].name

      header = (
        <div className='mdl-card__title'>
          <h2 className='mdl-card__title-text'>
            { countries.byId[countrySelected].name }
          </h2>
          <img className='mdl-list__item-avatar'
            src={'/images/flags/' + countrySelected + '.svg'}
            alt={countries.byId[countrySelected].name} />
        </div>
      )

      body = (
        <div key='accents-list-body'>
          {
            countryAccentIds.length > 0
            ? <div>
              <h3 className='eam-card__list-subheader'>General</h3>
              <AccentsListBody
                accentIds={countryAccentIds}
                accents={accents}
                accentSelected={accentSelected}
                onAccentClick={this.selectAccent}
              />
            </div>
            : null
          }
          {
            regionAccentIds.length > 0
            ? <div>
              <h3 className='eam-card__list-subheader'>By region</h3>
              <AccentsListBody
                accentIds={regionAccentIds}
                accents={accents}
                accentSelected={accentSelected}
                onAccentClick={this.selectAccent}
              />
            </div>
            : null
          }
        </div>
      )

      menu = (
        <Link className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'
          to={'/'}>
          <i className='material-icons'>arrow_back</i>
        </Link>
      )
    } else {
      docTitle = null
      header = null

      body = <Spinner key='loading-indicator' />
      menu = null
    }

    return (
      <div>
        <DocumentTitle title={makeDocumentTitle(docTitle)} />
        <div className='eam-card eam-card--accents-list mdl-card mdl-shadow--8dp'>
          { header }
          <div className='mdl-card__supporting-text'>{ body }</div>
          <div className='mdl-card__menu'>{ menu }</div>
        </div>
      </div>
    )
  },

  propTypes: {
    params: React.PropTypes.object,
    countries: React.PropTypes.object,
    accents: React.PropTypes.object,
    countryAccentIds: React.PropTypes.array,
    regionAccentIds: React.PropTypes.array,
    loading: React.PropTypes.bool,
    countrySelected: React.PropTypes.string,
    accentSelected: React.PropTypes.string,
    onSelectCountry: React.PropTypes.func,
    onSelectAccent: React.PropTypes.func
  }
})

const AccentsListBody = ({ accentIds, accents, accentSelected, onAccentClick }) => (
  <ul className='mdl-list'>
    { accentIds.map((id) => (
      <li key={id} className='mdl-list__item mdl-list__item--two-line'>
        <div
          className={'eam-card__link' + (accentSelected === id ? ' eam-card__link--active' : '')}
          role='button'
          onClick={() => onAccentClick(id)}>
          <span className='mdl-list__item-primary-content'>
            <span>{accents.byId[id].name}</span>
            <span className='mdl-list__item-sub-title'>{accents.byId[id].videos.length} videos</span>
          </span>
          <span className='mdl-list__item-secondary-action'>
            <i className='material-icons'>play_circle_filled</i>
          </span>
        </div>
      </li>
      )
    ) }
  </ul>
)

AccentsListBody.propTypes = {
  accents: React.PropTypes.object,
  accentIds: React.PropTypes.array,
  accentSelected: React.PropTypes.string,
  onAccentClick: React.PropTypes.func
}

export default AccentsList
