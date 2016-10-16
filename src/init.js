import firebase from 'firebase'
import { FIREBASE_CONFIG } from './config'
import locationInit from './services/location'
import viewportInit from './services/viewport'
import { loadCountries } from './scenes/home/components/CountriesList/actions'

export default function init (store) {
  // Initialise Firebase
  firebase.initializeApp(FIREBASE_CONFIG)
  // Listen to location changes
  locationInit(store)
  // Listen to window resize event
  viewportInit(store)
  // Load countries
  store.dispatch(loadCountries())
}
