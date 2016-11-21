import ReactGA from 'react-ga'
import firebase from 'firebase'
import { FIREBASE_CONFIG, ANALYTICS_TRACKING_ID } from './config'
import locationInit from './services/location'
import viewportInit from './services/viewport'
import { loadCountries } from './scenes/home/components/CountriesList/actions'
import { loadAccents } from './scenes/home/components/AccentsList/actions'

export default function init (store) {
  // Init Google Analytics
  ReactGA.initialize(ANALYTICS_TRACKING_ID)
  // Initialise Firebase
  firebase.initializeApp(FIREBASE_CONFIG)
  // Listen to location changes
  locationInit(store)
  // Listen to window resize event
  viewportInit(store)
  // Load countries
  store.dispatch(loadCountries())
  // Load accents
  store.dispatch(loadAccents())
}
