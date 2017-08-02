import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Spinner from '../../../../components/Spinner'
import { selectAccent, pushAccentUrl } from '../AccentsList/actions'
import { selectCountry } from '../CountriesList/actions'
import './styles.scss'

class FavoritesList extends React.Component {
  componentWillMount () {
    this.props.dispatch(selectCountry(null))
    this.props.dispatch(selectAccent(null))
  }

  selectAccent (id) {
    if (this.props.accentSelected !== id) {
      pushAccentUrl(id, this.props.accents)
    }
  }

  render () {
    const { smallScreen, loading, favorites, accents, accentSelected, toggleFavorite } = this.props
    let body = null

    if (loading) {
      body = <Spinner />
    } else {
      body = (
        favorites.length ? (
          <ul className='mdl-list'>
            { favorites.map((id) => (
              <li key={id} className='mdl-list__item mdl-list__item--two-line'>
                <div className={'eam-card__link' + (accentSelected === id ? ' eam-card__link--active' : '')}
                  role='button'
                  onClick={() => { this.selectAccent(id) }}
                  >
                  <span className='mdl-list__item-primary-content'>
                    <img className='mdl-list__item-avatar'
                      src={'/images/flags/' + accents.byId[id].country + '.svg'}
                      alt={accents.byId[id].country} />
                    <span>{accents.byId[id].name}</span>
                    <span className='mdl-list__item-sub-title'>{accents.byId[id].videos.length} videos</span>
                  </span>
                </div>
                <span className='mdl-list__item-secondary-action'>
                  <button className='mdl-button mdl-js-button mdl-button--icon'
                    onClick={() => { toggleFavorite(id) }}>
                    <i className='material-icons'>delete</i>
                  </button>
                </span>
              </li>
            )) }
          </ul>
        ) : (
          <div className='empty-list'>
            <p>This list is empty. Try adding some accents using the heart button.</p>
          </div>
        )
      )
    }

    return (
      <div className='eam-card eam-card--favorites-list mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__title'>
          <h2 className='mdl-card__title-text'>My favorites</h2>
        </div>
        { !smallScreen ? (
          <div className='mdl-card__menu'>
            <Link to='/'>
              <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'>
                <i className='material-icons'>close</i>
              </button>
            </Link>
          </div>
        ) : null }
        <div className='mdl-card__supporting-text'>{ body }</div>
      </div>
    )
  }
}

FavoritesList.propTypes = {
  loading: PropTypes.bool,
  smallScreen: PropTypes.bool,
  favorites: PropTypes.array,
  accents: PropTypes.object,
  accentSelected: PropTypes.string,
  toggleFavorite: PropTypes.func,
  dispatch: PropTypes.func
}

export default FavoritesList
