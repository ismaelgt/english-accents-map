import { connect } from 'react-redux'
import AccentsList from './AccentsList'
import { selectCountry } from '../CountriesList/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => {
      dispatch(selectCountry(null))
    }
  }
}

export default connect(null, mapDispatchToProps)(AccentsList)
