import React from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import CoreLayout from '../CoreLayout'
import HomePage from '../../scenes/home/components/HomePage'
import FavoritesList from '../../scenes/home/components/FavoritesList'
import SuggestPage from '../../scenes/suggest/components/SuggestPage'
import CountriesList from '../../scenes/home/components/CountriesList'
import AccentsList from '../../scenes/home/components/AccentsList'
import '../../styles/main.scss'

class Root extends React.Component {
  render () {
    const { store } = this.props

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={CoreLayout}>
            <Route path='/suggest' component={SuggestPage} />
            <Route path='/' component={HomePage}>
              <IndexRoute component={CountriesList} />
              <Route path='favorites' component={FavoritesList} />
              <Route path=':countryId' component={AccentsList} />
              <Route path=':countryId/:accentId' component={AccentsList} />
            </Route>
          </Route>
        </Router>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Root
