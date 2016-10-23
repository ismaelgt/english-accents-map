import { connect } from 'react-redux'
import HomePage from './HomePage'

const mapStateToProps = (state) => ({
  viewport: state.viewport
})

export default connect(mapStateToProps)(HomePage)
