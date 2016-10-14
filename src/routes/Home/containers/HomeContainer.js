import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => ({
  countries: state.countries
})

export default connect(mapStateToProps)(Home)
