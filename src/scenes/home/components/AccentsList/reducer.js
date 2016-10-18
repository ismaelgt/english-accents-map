import { REQUEST_ACCENTS, RECEIVE_ACCENTS } from './actions'

const initialState = {
  loading: true,
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ACCENTS:
      return { ...state, loading: true }
    case RECEIVE_ACCENTS:
      return { ...state, loading: false, items: action.payload.items }
    default:
      return state
  }
}
