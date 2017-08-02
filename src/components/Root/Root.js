import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { history } from '../../services/location'
import CoreLayout from '../CoreLayout'
import '../../styles/main.scss'

class Root extends React.Component {
  render () {
    const { store } = this.props

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route component={CoreLayout} />
        </Router>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
