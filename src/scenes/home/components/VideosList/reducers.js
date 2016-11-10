import { OPEN_VIDEOS, CLOSE_VIDEO } from './actions'

const initialVideosUiState = {
  open: false,
  index: null
}

export const videosUiReducer = (state = initialVideosUiState, action) => {
  switch (action.type) {
    case OPEN_VIDEOS:
      return {
        open: action.payload !== null,
        index: action.payload !== null ? 0 : null
      }
    case CLOSE_VIDEO:
      return {
        open: false,
        index: null
      }
    default:
      return state
  }
}
