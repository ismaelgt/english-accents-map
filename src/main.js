import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import Root from './common/Root'
import { loadCountries } from './scenes/home/CountriesList/actions'
import { firebaseConfig } from './config'
import firebase from 'firebase'

// ========================================================
// Firebase Initialization
// ========================================================
firebase.initializeApp(firebaseConfig)

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

store.dispatch(loadCountries())

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <Root store={store} />,
    MOUNT_NODE
  )
}

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept()
  }
}

// ========================================================
// Go!
// ========================================================
render()
