import networkStatusChange from './actions'

export default function init (store) {
  function dispatchNetworkStatusChangeAction () {
    store.dispatch(networkStatusChange(window.navigator.onLine))
  }

  window.addEventListener('offline', dispatchNetworkStatusChangeAction)
  window.addEventListener('online', dispatchNetworkStatusChangeAction)
}
