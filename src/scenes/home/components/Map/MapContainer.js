import { connect } from 'react-redux'
import Map from './Map'

const mapStateToProps = (state) => ({
  countries: state.entities.countries,
  accents: state.entities.accents,
  countriesLoading: state.ui.countries.loading,
  accentsLoading: state.ui.accents.loading,
  countrySelected: state.ui.countries.selected,
  accentSelected: state.ui.accents.selected
})

export default connect(mapStateToProps)(Map)
