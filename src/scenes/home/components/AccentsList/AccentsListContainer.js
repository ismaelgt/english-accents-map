import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import AccentsList from './AccentsList'
import { selectCountry } from '../CountriesList/actions'
import { selectAccent } from './actions'

const getCountriesLoading = (state) => state.ui.countries.loading
const getAccentsLoading = (state) => state.ui.accents.loading
const getAccentsById = (state) => state.entities.accents.byId
const getSelectedCountry = (state) => state.ui.countries.selected

const getRegionAccentIds = createSelector(
  getCountriesLoading, getAccentsLoading, getAccentsById, getSelectedCountry,
  (countriesLoading, accentsLoading, accentsById, selectedCountry) => {
    return !countriesLoading && !accentsLoading && selectedCountry
      ? Object.keys(accentsById).filter(
        (id) => (accentsById[id].country === selectedCountry && accentsById[id].coords)
      )
      : []
  }
)

const getCountryAccentIds = createSelector(
  getCountriesLoading, getAccentsLoading, getAccentsById, getSelectedCountry,
  (countriesLoading, accentsLoading, accentsById, selectedCountry) => {
    return !countriesLoading && !accentsLoading && selectedCountry
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
  countriesLoading: state.ui.countries.loading,
  accentsLoading: state.ui.accents.loading,
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
