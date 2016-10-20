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
      selectedCountry: null,
      selectedAccent: null
    }
  },

  // Selected country and accent will be received via props.
  componentWillReceiveProps (nextProps) {
    if (!this.props.loaded) {
      return
    }
    if (nextProps.selectedCountry && nextProps.selectedCountry !== this.state.selectedCountry) {
      this.selectCountry(nextProps.selectedCountry)
    }
    if (nextProps.selectedAccent && nextProps.selectedAccent !== this.state.selectedAccent) {
      this.selectAccent(nextProps.selectedAccent)
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
    if (prevProps.selectedAccent) {
      this.selectAccent(prevProps.selectedAccent)
    } else if (prevProps.selectedCountry) {
      this.selectCountry(prevProps.selectedCountry)
    }
  },

  // Load the map
  loadMap () {
    const { google } = this.props
    const mapEl = ReactDOM.findDOMNode(this.refs.map)
    this.map = new google.maps.Map(mapEl, GOOGLE_MAPS_CONFIG)
  },

  // Fit country in map using South West and North East coordinates
  selectCountry (country) {
    const { sw, ne } = country.value.coords
    const bounds = new this.props.google.maps.LatLngBounds(sw, ne)
    this.map.fitBounds(bounds)
    this.setState({ ...this.state, selectedCountry: country })
  },

  // Move map center to accent location
  selectAccent (accent) {
    this.map.panTo(accent.value.coords)
    this.map.setZoom(7)
    this.setState({ ...this.state, selectedAccent: accent })
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
