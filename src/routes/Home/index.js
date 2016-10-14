import { injectReducer } from '../../store/reducers'
import { loadCountries } from './actions'
import countriesReducer from './reducers'

export default (store) => {
  injectReducer(store, { key: 'countries', reducer: countriesReducer })
  store.dispatch(loadCountries())
}
