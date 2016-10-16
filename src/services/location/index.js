import { browserHistory } from 'react-router'
import { updateLocation } from './actions'

export default function init (store) {
  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))
}
