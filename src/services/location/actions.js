import ReactGA from 'react-ga'

// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange (location = '/') {
  return {
    type    : LOCATION_CHANGE,
    payload : location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = (store) => {
  return (nextLocation) => {
    const currLocation = store.getState().ui.location
    if (currLocation === null || currLocation.pathname !== nextLocation.pathname) {
      ReactGA.set({ page: nextLocation.pathname })
      ReactGA.pageview(nextLocation.pathname)
    }
    store.dispatch(locationChange(nextLocation))
  }
}
