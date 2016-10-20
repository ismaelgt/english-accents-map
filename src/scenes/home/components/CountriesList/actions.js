import firebase from 'firebase'
import { objectSnapshotToArray } from '../../../../services/firebase-structures'

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES'
export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES'
export const SELECT_COUNTRY = 'SELECT_COUNTRY'

export const requestCountries = () => ({
  type: REQUEST_COUNTRIES
})

export const receiveCountries = (items) => ({
  type: RECEIVE_COUNTRIES,
  payload: {
    items: items
  }
})

export const selectCountry = (country) => ({
  type: SELECT_COUNTRY,
  payload: {
    country: country
  }
})

// Thunk
export const loadCountries = () => {
  return (dispatch) => {
    dispatch(requestCountries())
    firebase.database()
      .ref('/countries')
      .orderByChild('order')
      .once('value')
      .then((snapshot) => {
        dispatch(receiveCountries(objectSnapshotToArray(snapshot)))
      })
  }
}
