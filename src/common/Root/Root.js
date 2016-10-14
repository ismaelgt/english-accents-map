import React, { Component, PropTypes } from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import CoreLayout from '../CoreLayout'
import HomePage from '../../scenes/home/HomePage'
import AboutPage from '../../scenes/about/AboutPage'
import '../../styles/core.scss'

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
            <IndexRoute component={HomePage} />
            <Route path='about' component={AboutPage} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default AppContainer
