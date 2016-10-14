import { connect } from 'react-redux'
import CountriesList from './CountriesList'

const mapStateToProps = (state) => ({
  countries: state.countries
})

export default connect(mapStateToProps)(CountriesList)
