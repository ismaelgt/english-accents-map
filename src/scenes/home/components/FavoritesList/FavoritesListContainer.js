import { connect } from 'react-redux'
import FavoritesList from './FavoritesList'
import toggleFavorite from '../../../../services/favoritesList/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (accent) => {
      dispatch(toggleFavorite(accent, false))
    },
    dispatch
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.ui.countries.loading || state.ui.accents.loading,
    favorites: state.entities.favorites,
    accents: state.entities.accents,
    accentSelected: state.ui.accents.selected
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList)
