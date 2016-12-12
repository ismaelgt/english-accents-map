import networkStatusChange from './actions'
import { loadCountries } from '../../scenes/home/components/CountriesList/actions'
import { loadAccents } from '../../scenes/home/components/AccentsList/actions'

export default function init (store) {
  function dispatchNetworkStatusChangeAction () {
    store.dispatch(networkStatusChange(window.navigator.onLine))

    if (window.navigator.onLine) {
      store.dispatch(loadCountries())
      store.dispatch(loadAccents())
    }
  }

  window.addEventListener('offline', dispatchNetworkStatusChangeAction)
  window.addEventListener('online', dispatchNetworkStatusChangeAction)
}
