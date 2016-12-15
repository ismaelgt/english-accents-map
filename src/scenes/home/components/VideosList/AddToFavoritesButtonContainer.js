import { connect } from 'react-redux'
import AddToFavoritesButton from './AddToFavoritesButton'
import toggleFavorite from '../FavoritesList/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (accent) => {
      dispatch(toggleFavorite(accent))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.entities.favorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavoritesButton)
