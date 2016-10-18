import { combineReducers } from 'redux'
import locationReducer from '../services/location/reducer'
import viewportReducer from '../services/viewport/reducer'
import countriesReducer from '../scenes/home/components/CountriesList/reducer'
import accentsReducer from '../scenes/home/components/AccentsList/reducer'

export const makeRootReducer = () => {
  return combineReducers({
    location: locationReducer,
    countries: countriesReducer,
    accents: accentsReducer,
    viewport: viewportReducer
  })
}

export default makeRootReducer
