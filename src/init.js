import ReactGA from 'react-ga'
import firebase from 'firebase/app'
import { FIREBASE_CONFIG, ANALYTICS_TRACKING_ID } from './config'
import locationInit from './services/location'
import viewportInit from './services/viewport'
import networkStatusInit from './services/networkStatus'
import { loadCountries } from './scenes/home/components/CountriesList/actions'
import { loadAccents } from './scenes/home/components/AccentsList/actions'

export default function init (store) {
  // Register ServiceWorker
  if (__PROD__ && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
  }

  // Init Google Analytics
  ReactGA.initialize(ANALYTICS_TRACKING_ID)

  // Initialise Firebase
  firebase.initializeApp(FIREBASE_CONFIG)

  // Listen to location changes
  locationInit(store)

  // Listen to window resize event
  viewportInit(store)

  // Listen to network status changes
  networkStatusInit(store)

  if (window.navigator.onLine) {
    // Load countries
    store.dispatch(loadCountries())

    // Load accents
    store.dispatch(loadAccents())
  }
}
