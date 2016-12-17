import { connect } from 'react-redux'
import Map from './Map'

const mapStateToProps = (state) => ({
  smallScreen: state.ui.viewport.small,
  countries: state.entities.countries,
  accents: state.entities.accents,
  loading: state.ui.countries.loading || state.ui.accents.loading,
  countrySelected: state.ui.countries.selected,
  accentSelected: state.ui.accents.selected
})

export default connect(mapStateToProps)(Map)
