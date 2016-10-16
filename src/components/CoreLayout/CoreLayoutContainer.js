import { connect } from 'react-redux'
import CoreLayout from './CoreLayout'

const mapStateToProps = (state) => ({
  location: state.location
})

export default connect(mapStateToProps)(CoreLayout)
