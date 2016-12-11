import { connect } from 'react-redux'
import CoreLayout from './CoreLayout'

const mapStateToProps = (state) => ({
  location: state.ui.location,
  online: state.ui.network.online
})

export default connect(mapStateToProps)(CoreLayout)
