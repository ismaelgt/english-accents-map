import showSnackbarMessage from '../../../../services/snackbar'

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

function getToggleFavoriteAction (accentId) {
  return {
    type    : TOGGLE_FAVORITE,
    payload : accentId
  }
}

// Thunk
export default function toggleFavorite (accentId, showSnackbar = true) {
  return (dispatch) => {
    dispatch(getToggleFavoriteAction(accentId))
    if (showSnackbar) {
      showSnackbarMessage({
        message: 'Favorites list updated'
      })
    }
  }
}
