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
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => {
    ReactGA.set({ page: nextLocation.pathname })
    ReactGA.pageview(nextLocation.pathname)
    dispatch(locationChange(nextLocation))
  }
}
