import firebase from 'firebase'

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES'
export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES'

export const requestCountries = () => ({
  type: REQUEST_COUNTRIES
})

export const receiveCountries = (data) => ({
  type: RECEIVE_COUNTRIES,
  payload: {
    data: data
  }
})

// Thunk
export const loadCountries = () => {
  return (dispatch) => {
    dispatch(requestCountries())
    firebase.database()
      .ref('/countries')
      .once('value')
      .then((snapshot) => {
        dispatch(receiveCountries(snapshot.val()))
      })
  }
}
