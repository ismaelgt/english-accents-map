import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import AccentsList from './AccentsList'
import { selectCountry } from '../CountriesList/actions'
import { selectAccent } from './actions'

const getLoading = (state) => state.ui.countries.loading || state.ui.accents.loading
const getAccentsById = (state) => state.entities.accents.byId
const getSelectedCountry = (state) => state.ui.countries.selected

const getRegionAccentIds = createSelector(
  getLoading, getAccentsById, getSelectedCountry,
  (loading, accentsById, selectedCountry) => {
    return !loading && selectedCountry
      ? Object.keys(accentsById).filter(
        (id) => (accentsById[id].country === selectedCountry && accentsById[id].coords)
      )
      : []
  }
)

const getCountryAccentIds = createSelector(
  getLoading, getAccentsById, getSelectedCountry,
  (loading, accentsById, selectedCountry) => {
    return !loading && selectedCountry
      ? Object.keys(accentsById).filter(
        (id) => (accentsById[id].country === selectedCountry && !accentsById[id].coords)
      )
      : []
  }
)

const mapStateToProps = (state) => ({
  countries: state.entities.countries,
  accents: state.entities.accents,
  regionAccentIds: getRegionAccentIds(state),
  countryAccentIds: getCountryAccentIds(state),
  loading: state.ui.countries.loading || state.ui.accents.loading,
  countrySelected: state.ui.countries.selected,
  accentSelected: state.ui.accents.selected
})

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectCountry: (country) => {
      dispatch(selectCountry(country))
    },
    onSelectAccent: (accent) => {
      dispatch(selectAccent(accent))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccentsList)
