import { combineReducers } from 'redux'
import locationReducer from './location'
import countriesReducer from '../scenes/home/CountriesList/reducers'

export const makeRootReducer = () => {
  return combineReducers({
    location: locationReducer,
    countries: countriesReducer
  })
}

export default makeRootReducer
