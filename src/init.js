import firebase from 'firebase'
import { firebaseConfig } from './config'
import locationInit from './services/location'
import { loadCountries } from './scenes/home/components/CountriesList/actions'

export default function init (store) {
  // Initialise Firebase
  firebase.initializeApp(firebaseConfig)
  // Listen to location changes
  locationInit(store)
  // Load countries
  store.dispatch(loadCountries())
}
