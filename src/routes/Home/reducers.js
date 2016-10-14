import { REQUEST_COUNTRIES, RECEIVE_COUNTRIES } from './actions'

const initialState = {
  loading: true,
  data: {}
}

export default (state, action) => {
  switch (action.type) {
    case REQUEST_COUNTRIES:
      return { ...state, loading: true }
    case RECEIVE_COUNTRIES:
      return { ...state, loading: false, data: action.payload.data }
    default:
      return initialState
  }
}
