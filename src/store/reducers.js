import { combineReducers } from 'redux'
import locationReducer from '../services/location/reducer'
import countriesReducer from '../scenes/home/components/CountriesList/reducer'

export const makeRootReducer = () => {
  return combineReducers({
    location: locationReducer,
    countries: countriesReducer
  })
}

export default makeRootReducer
