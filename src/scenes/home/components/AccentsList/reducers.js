import { REQUEST_ACCENTS, RECEIVE_ACCENTS, SELECT_ACCENT } from './actions'

const initialEntityState = {
  byId: {}
}

export const entityReducer = (state = initialEntityState, action) => {
  switch (action.type) {
    case RECEIVE_ACCENTS:
      return { byId: action.payload }
    default:
      return state
  }
}

const initialUiState = {
  loading: true,
  selected: null
}

export const uiReducer = (state = initialUiState, action) => {
  switch (action.type) {
    case REQUEST_ACCENTS:
      return { ...state, loading: true }
    case RECEIVE_ACCENTS:
      return { ...state, loading: false }
    case SELECT_ACCENT:
      return { ...state, selected: action.payload }
    default:
      return state
  }
}
