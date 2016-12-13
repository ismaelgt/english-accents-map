import { connect } from 'react-redux'
import VideosList from './VideosList'

const mapStateToProps = (state) => {
  const videos = state.ui.accents.selected
    ? state.entities.accents.byId[state.ui.accents.selected].videos
    : null

  return {
    isSmallViewport: state.ui.viewport.isSmall,
    countrySelected: state.ui.countries.selected,
    location: state.ui.location,
    videos: videos
  }
}

export default connect(mapStateToProps)(VideosList)
