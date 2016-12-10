import { NETWORK_STATUS_CHANGE } from './actions'

const initialState = {
  online: true
}

export default function networkStatusReducer (state = initialState, action) {
  if (action.type === NETWORK_STATUS_CHANGE) {
    return { online: action.payload }
  }
  return state
}
