import { connect } from 'react-redux'
import NowWatching from './NowWatching'
import { openVideos } from '../VideosList/actions'

const mapStateToProps = (state) => {
  const selectedCountry = state.ui.countries.selected
      ? state.entities.countries.byId[state.ui.countries.selected]
      : null
  const selectedAccent = state.ui.accents.selected
    ? state.entities.accents.byId[state.ui.accents.selected]
    : null

  return {
    selectedCountry,
    selectedAccent,
    videosOpen: state.ui.videos.open
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onShowVideosClick: () => {
      dispatch(openVideos())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NowWatching)
