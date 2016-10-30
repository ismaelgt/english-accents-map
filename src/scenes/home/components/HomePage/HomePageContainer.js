import { connect } from 'react-redux'
import HomePage from './HomePage'

const mapStateToProps = (state) => ({
  viewport: state.ui.viewport,
  videoOpen: state.ui.videos.open
})

export default connect(mapStateToProps)(HomePage)
