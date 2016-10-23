import { connect } from 'react-redux'
import Map from './Map'

const mapStateToProps = (state) => ({
  countries: state.countries
})

export default connect(mapStateToProps)(Map)
