import { WINDOW_RESIZE, LARGE_SCREEN_BREAKPOINT } from './actions'

const initialState = {
  small: window.innerWidth <= LARGE_SCREEN_BREAKPOINT
}

export default function viewportReducer (state = initialState, action) {
  if (action.type === WINDOW_RESIZE) {
    return { small: action.payload }
  }
  return state
}
