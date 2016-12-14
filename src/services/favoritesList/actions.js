export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

export default function toggleFavorite (accentId) {
  return {
    type    : TOGGLE_FAVORITE,
    payload : accentId
  }
}
