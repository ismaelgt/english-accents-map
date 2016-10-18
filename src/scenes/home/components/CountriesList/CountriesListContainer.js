import { connect } from 'react-redux'
import { selectCountry } from './actions'
import CountriesList from './CountriesList'

const mapDispatchToProps = (dispatch) => {
  return {
    onCountrySelected: (country) => {
      dispatch(selectCountry(country))
    }
  }
}

export default connect(null, mapDispatchToProps)(CountriesList)
