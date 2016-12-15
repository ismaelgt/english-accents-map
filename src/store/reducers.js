import { combineReducers } from 'redux'
import locationReducer from '../services/location/reducer'
import viewportReducer from '../services/viewport/reducer'
import networkStatusReducer from '../services/networkStatus/reducer'
import favoritesReducer from '../scenes/home/components/FavoritesList/reducer'
import { countriesEntityReducer, countriesUiReducer } from '../scenes/home/components/CountriesList/reducers'
import { accentsEntityReducer, accentsUiReducer } from '../scenes/home/components/AccentsList/reducers'

export const makeRootReducer = () => {
  const entitiesReducer = combineReducers({
    countries: countriesEntityReducer,
    accents: accentsEntityReducer,
    favorites: favoritesReducer
  })

  const uiReducer = combineReducers({
    network: networkStatusReducer,
    location: locationReducer,
    viewport: viewportReducer,
    countries: countriesUiReducer,
    accents: accentsUiReducer
  })

  return combineReducers({
    entities: entitiesReducer,
    ui: uiReducer
  })
}

export default makeRootReducer
