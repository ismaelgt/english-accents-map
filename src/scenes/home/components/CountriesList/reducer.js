import { REQUEST_COUNTRIES, RECEIVE_COUNTRIES, SELECT_COUNTRY } from './actions'
import { SELECT_ACCENT } from '../AccentsList/actions'

const initialState = {
  loading: true,
  selected: null,
  selectedAccent: null,
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COUNTRIES:
      return { ...state, loading: true }
    case RECEIVE_COUNTRIES:
      return { ...state, loading: false, items: action.payload.items }
    case SELECT_COUNTRY:
      return { ...state, selected: action.payload.country }
    case SELECT_ACCENT:
      return { ...state, selectedAccent: action.payload.accent }
    default:
      return state
  }
}
