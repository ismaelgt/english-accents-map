import { REQUEST_COUNTRIES, RECEIVE_COUNTRIES, SELECT_COUNTRY } from './actions'

const initialEntityState = {
  byId: {},
  orderedIds: []
}

export const entityReducer = (state = initialEntityState, action) => {
  switch (action.type) {
    case RECEIVE_COUNTRIES:
      return { byId: action.payload.byId, orderedIds: action.payload.orderedIds }
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
    case REQUEST_COUNTRIES:
      return { ...state, loading: true }
    case RECEIVE_COUNTRIES:
      return { ...state, loading: false }
    case SELECT_COUNTRY:
      return { ...state, selected: action.payload }
    default:
      return state
  }
}
