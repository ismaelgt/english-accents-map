import { SELECT_ACCENT } from '../AccentsList/actions'
import { NEXT_VIDEO, PREVIOUS_VIDEO, CLOSE_VIDEO } from './actions'

const initialVideosUiState = {
  open: false,
  index: null
}

export const videosUiReducer = (state = initialVideosUiState, action) => {
  switch (action.type) {
    case SELECT_ACCENT:
      return {
        open: action.payload !== null,
        index: action.payload !== null ? 0 : null
      }
    case CLOSE_VIDEO:
      return {
        open: false,
        index: null
      }
    case NEXT_VIDEO:
      return { ...state, index: state.index + 1 }
    case PREVIOUS_VIDEO:
      return { ...state, index: state.index - 1 }
    default:
      return state
  }
}
