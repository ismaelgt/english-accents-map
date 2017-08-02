import createBrowserHistory from 'history/createBrowserHistory'
import { updateLocation } from './actions'

export const history = createBrowserHistory()

export default function init (store) {
  updateLocation(store)(history.location)
  store.unsubscribeHistory = history.listen(updateLocation(store))
}
