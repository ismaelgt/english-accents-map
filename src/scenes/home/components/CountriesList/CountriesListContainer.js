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

const mapStateToProps = (state) => ({
  countries: state.countries
})

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList)
