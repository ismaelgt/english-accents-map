import { connect } from 'react-redux'
import HomePage from './HomePage'

const mapStateToProps = (state) => ({
  countries: state.countries,
  viewport: state.viewport
})

export default connect(mapStateToProps)(HomePage)
