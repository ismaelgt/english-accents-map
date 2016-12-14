import { TOGGLE_FAVORITE } from './actions'
import { REHYDRATE } from 'redux-persist/constants'

const initialState = []

export default function favoritesReducer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const index = state.indexOf(action.payload)
      if (index > -1) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ]
      } else {
        return [...state, action.payload]
      }
    case REHYDRATE:
      return action.payload.entities ? action.payload.entities.favorites : state
    default:
      return state
  }
}
