import { connect } from 'react-redux'
import AccentsList from './AccentsList'
import { selectCountry } from '../CountriesList/actions'
import { openVideos } from '../VideosList/actions'
import { selectAccent } from './actions'

const mapStateToProps = (state) => ({
  countries: state.entities.countries,
  accents: state.entities.accents,
  countriesLoading: state.ui.countries.loading,
  accentsLoading: state.ui.accents.loading,
  countrySelected: state.ui.countries.selected,
  accentSelected: state.ui.accents.selected,
  videosOpen: state.ui.videos.open
})

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectCountry: (country) => {
      dispatch(selectCountry(country))
    },
    onSelectAccent: (accent) => {
      dispatch(selectAccent(accent))
    },
    onOpenVideos: () => {
      dispatch(openVideos())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccentsList)
