import { REQUEST_ACCENTS, RECEIVE_ACCENTS, SELECT_ACCENT } from './actions'

const initialAccentsEntityState = {
  byId: {}
}

export const accentsEntityReducer = (state = initialAccentsEntityState, action) => {
  switch (action.type) {
    case RECEIVE_ACCENTS:
      return { byId: action.payload }
    default:
      return state
  }
}

const initialAccentsUiState = {
  loading: true,
  selected: null
}

export const accentsUiReducer = (state = initialAccentsUiState, action) => {
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
