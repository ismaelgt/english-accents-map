import { connect } from 'react-redux'
import VideosList from './VideosList'
import { CLOSE_VIDEO } from './actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseVideo: () => {
      dispatch({ type: CLOSE_VIDEO })
    }
  }
}

const mapStateToProps = (state) => {
  const videos = state.ui.accents.selected
    ? state.entities.accents.byId[state.ui.accents.selected].videos
    : null

  return {
    videos: videos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosList)
