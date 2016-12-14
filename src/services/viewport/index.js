import windowResize, { LARGE_SCREEN_BREAKPOINT } from './actions'

export default function init (store) {
  window.addEventListener('resize', () => {
    if (store.getState().ui.viewport.small && window.innerWidth > LARGE_SCREEN_BREAKPOINT) {
      store.dispatch(windowResize(false))
    }
    if (!store.getState().ui.viewport.small && window.innerWidth <= LARGE_SCREEN_BREAKPOINT) {
      store.dispatch(windowResize(true))
    }
  })
}
