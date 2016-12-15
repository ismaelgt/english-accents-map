export const SNACKBAR_ELEMENT_ID = 'snackbar'

export default function showSnackbarMessage (message) {
  const snackbar = document.querySelector('#' + SNACKBAR_ELEMENT_ID)
  snackbar.MaterialSnackbar.showSnackbar(message)
}
