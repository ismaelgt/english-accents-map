import { connect } from 'react-redux'
import HomePage from './HomePage'

const mapStateToProps = (state) => ({
  online: state.ui.network.online,
  viewport: state.ui.viewport,
  accentSelected: state.ui.accents.selected
})

export default connect(mapStateToProps)(HomePage)
