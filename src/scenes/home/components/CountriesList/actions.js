import firebase from 'firebase'

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
        let orderedCountries = []
        snapshot.forEach(function (item) {
          orderedCountries.push({ key: item.key, ...item.val() })
        })
        dispatch(receiveCountries(orderedCountries))
      })
  }
}
