import { connect } from 'react-redux'
import VideosTitleBar from './VideosTitleBar'
import { selectAccent } from '../AccentsList/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    selectAccent: (accent) => {
      dispatch(selectAccent(accent))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    accents: state.entities.accents,
    accentSelected: state.ui.accents.selected
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosTitleBar)
