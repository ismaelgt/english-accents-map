import { connect } from 'react-redux'
import VideosTitleBar from './VideosTitleBar'
import { CLOSE_VIDEO } from './actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseVideo: () => {
      dispatch({ type: CLOSE_VIDEO })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    accents: state.entities.accents,
    countrySelected: state.ui.countries.selected,
    accentSelected: state.ui.accents.selected
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosTitleBar)
