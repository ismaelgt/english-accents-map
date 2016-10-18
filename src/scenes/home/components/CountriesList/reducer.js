import { REQUEST_COUNTRIES, RECEIVE_COUNTRIES, SELECT_COUNTRY } from './actions'

const initialState = {
  loading: true,
  selected: null,
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
    default:
      return state
  }
}
