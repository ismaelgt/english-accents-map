import { connect } from 'react-redux'
import CountriesList from './CountriesList'

const mapStateToProps = (state) => ({
  countries: state.entities.countries,
  loading: state.ui.countries.loading
})

export default connect(mapStateToProps)(CountriesList)
