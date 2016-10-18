import { connect } from 'react-redux'
import AccentsList from './AccentsList'
import { selectCountry } from '../CountriesList/actions'

const mapStateToProps = (state) => ({
  accents: state.accents
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => {
      dispatch(selectCountry(null))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccentsList)
