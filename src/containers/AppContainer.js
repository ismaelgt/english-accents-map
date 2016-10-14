import React, { Component, PropTypes } from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import CoreLayout from '../layouts/CoreLayout'
import HomeContainer from '../routes/Home/containers/HomeContainer'
import About from '../routes/About/About'

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    const { store } = this.props

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={CoreLayout}>
            <IndexRoute component={HomeContainer} />
            <Route path='about' component={About} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default AppContainer
