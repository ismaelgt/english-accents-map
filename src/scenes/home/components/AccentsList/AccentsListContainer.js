import { connect } from 'react-redux'
import AccentsList from './AccentsList'
import { selectAccent } from './actions'
import { selectCountry } from '../CountriesList/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onAccentSelected: (accent) => {
      dispatch(selectAccent(accent))
    },
    onClose: () => {
      dispatch(selectCountry(null))
    }
  }
}

export default connect(null, mapDispatchToProps)(AccentsList)
