import React from 'react'
import ReactDOM from 'react-dom'
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent'
import { GOOGLE_MAPS_API_KEY } from '../../../../config'
import GOOGLE_MAPS_CONFIG from './config'
import './styles.scss'

// This component will not re-render in response to redux state or prop
// changes. We don't want to reload the map everytime these hapen. Instead,
// we'll keep an internal state, and we'll use Google Maps API to manage it.
const Map = React.createClass({

  render () {
    return (
      <div className='map-wrapper'>
        <div className='map' ref='map' />
      </div>
    )
  },

  // Define internal state.
  getInitialState () {
    return {
      selectedCountry: null
    }
  },

  // The country selected will be received via props.
  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedCountry) {
      this.selectCountry(nextProps.selectedCountry)
    }
  },

  // This component should never update after its initialisation as
  // the map would be reloaded.
  shouldComponentUpdate (nextProps) {
    return !this.props.loaded
  },

  // This is the first and only time the component is rendered.
  componentDidUpdate (prevProps, prevState) {
    this.loadMap()
  },

  // Load the map
  loadMap () {
    const { google } = this.props
    const mapEl = ReactDOM.findDOMNode(this.refs.map)
    this.map = new google.maps.Map(mapEl, GOOGLE_MAPS_CONFIG)
  },

  selectCountry (country) {
    this.setState({ selectedCountry: country })
    const { lat, lng } = country
    this.map.panTo({ lat, lng })
  },

  propTypes: {
    loaded: React.PropTypes.bool,
    google: React.PropTypes.object,
    selectedCountry: React.PropTypes.object
  }
})

export default GoogleApiComponent({
  apiKey: GOOGLE_MAPS_API_KEY
})(Map)
