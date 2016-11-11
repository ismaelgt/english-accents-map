import { OPEN_VIDEOS, CLOSE_VIDEO } from './actions'

const initialVideosUiState = {
  open: false
}

export const videosUiReducer = (state = initialVideosUiState, action) => {
  switch (action.type) {
    case OPEN_VIDEOS:
      return { open: action.payload !== null }
    case CLOSE_VIDEO:
      return { open: false }
    default:
      return state
  }
}
