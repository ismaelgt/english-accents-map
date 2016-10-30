import { connect } from 'react-redux'
import VideosList from './VideosList'
import { NEXT_VIDEO, PREVIOUS_VIDEO, CLOSE_VIDEO } from './actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onNextVideo: () => {
      dispatch({ type: NEXT_VIDEO })
    },
    onPreviousVideo: () => {
      dispatch({ type: PREVIOUS_VIDEO })
    },
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
    videos: videos,
    index: state.ui.videos.index
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosList)
