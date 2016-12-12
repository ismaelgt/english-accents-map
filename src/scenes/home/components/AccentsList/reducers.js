import { REHYDRATE } from 'redux-persist/constants'
import { REQUEST_ACCENTS, RECEIVE_ACCENTS, SELECT_ACCENT } from './actions'

const initialAccentsEntityState = {
  byId: {}
}

export const accentsEntityReducer = (state = initialAccentsEntityState, action) => {
  switch (action.type) {
    case RECEIVE_ACCENTS:
      return { byId: action.payload }
    case REHYDRATE:
      return action.payload.entities ? action.payload.entities.accents : state
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
    case REHYDRATE:
      return { ...state, loading: !action.payload.entities }
    case SELECT_ACCENT:
      return { ...state, selected: action.payload }
    default:
      return state
  }
}
