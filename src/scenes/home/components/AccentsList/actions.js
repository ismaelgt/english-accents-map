import firebase from 'firebase'

export const REQUEST_ACCENTS = 'REQUEST_ACCENTS'
export const RECEIVE_ACCENTS = 'RECEIVE_ACCENTS'

export const requestAccents = () => ({
  type: REQUEST_ACCENTS
})

export const receiveAccents = (items) => ({
  type: RECEIVE_ACCENTS,
  payload: {
    items: items
  }
})

// Thunk
export const loadAccents = () => {
  return (dispatch) => {
    dispatch(requestAccents())
    firebase.database()
      .ref('accents')
      .once('value')
      .then((snapshot) => {
        let accents = []
        snapshot.forEach(function (item) {
          accents.push({ key: item.key, ...item.val() })
        })
        dispatch(receiveAccents(accents))
      })
  }
}
