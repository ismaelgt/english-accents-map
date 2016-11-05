import { connect } from 'react-redux'
import { openVideos } from '../VideosList/actions'
import Map from './Map'

const mapStateToProps = (state) => ({
  countries: state.entities.countries,
  accents: state.entities.accents,
  countriesLoading: state.ui.countries.loading,
  accentsLoading: state.ui.accents.loading,
  countrySelected: state.ui.countries.selected,
  accentSelected: state.ui.accents.selected
})

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenVideos: () => {
      dispatch(openVideos())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
