import { REQUEST_COUNTRIES, RECEIVE_COUNTRIES, SELECT_COUNTRY } from './actions'

const initialCountriesEntityState = {
  byId: {},
  orderedIds: []
}

export const countriesEntityReducer = (state = initialCountriesEntityState, action) => {
  switch (action.type) {
    case RECEIVE_COUNTRIES:
      return { byId: action.payload.byId, orderedIds: action.payload.orderedIds }
    default:
      return state
  }
}

const initialCountriesUiState = {
  loading: true,
  selected: null
}

export const countriesUiReducer = (state = initialCountriesUiState, action) => {
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
