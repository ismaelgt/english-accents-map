import firebase from 'firebase'

export const REQUEST_ACCENTS = 'REQUEST_ACCENTS'
export const RECEIVE_ACCENTS = 'RECEIVE_ACCENTS'
export const SELECT_ACCENT = 'SELECT_ACCENT'

export const requestAccents = () => ({
  type: REQUEST_ACCENTS
})

export const receiveAccents = (items) => ({
  type: RECEIVE_ACCENTS,
  payload: items
})

export const selectAccent = (selectedId) => ({
  type: SELECT_ACCENT,
  payload: selectedId
})

// Thunk
export const loadAccents = () => {
  return (dispatch) => {
    dispatch(requestAccents())
    firebase.database()
      .ref('/accents')
      .once('value')
      .then((snapshot) => {
        dispatch(receiveAccents(snapshot.val()))
      })
  }
}
