import { connect } from 'react-redux'
import HomePage from './HomePage'

const mapStateToProps = (state) => ({
  countries: state.countries,
  accents: state.accents,
  viewport: state.viewport
})

export default connect(mapStateToProps)(HomePage)
