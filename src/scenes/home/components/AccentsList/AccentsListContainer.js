import { connect } from 'react-redux'
import AccentsList from './AccentsList'
import { selectCountry, selectAccent } from './actions'

const mapStateToProps = (state) => ({
  countries: state.countries
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
