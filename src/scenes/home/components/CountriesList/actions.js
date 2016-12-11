import firebase from 'firebase/app'
import 'firebase/database'

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES'
export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES'
export const SELECT_COUNTRY = 'SELECT_COUNTRY'

export const requestCountries = () => ({
  type: REQUEST_COUNTRIES
})

export const receiveCountries = (itemsById, orderedItemsIds) => ({
  type: RECEIVE_COUNTRIES,
  payload: {
    byId: itemsById,
    orderedIds: orderedItemsIds
  }
})

export const selectCountry = (selectedId) => ({
  type: SELECT_COUNTRY,
  payload: selectedId
})

// Thunk
export const loadCountries = () => {
  return (dispatch) => {
    dispatch(requestCountries())
    firebase.database()
      .ref('/countries')
      .orderByChild('published')
      .equalTo(true)
      .once('value')
      .then((snapshot) => {
        const byId = snapshot.val()
        let orderedIds = []
        snapshot.forEach(function (item) {
          orderedIds.push(item.key)
        })
        dispatch(receiveCountries(byId, orderedIds))
      })
  }
}
