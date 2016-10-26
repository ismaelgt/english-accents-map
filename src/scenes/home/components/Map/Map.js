import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent'
import { GOOGLE_MAPS_API_KEY } from '../../../../config'
import GOOGLE_MAPS_CONFIG from './config'
import './styles.scss'

// This component will not re-render in response to redux state or prop
// changes. We don't want to reload the map everytime these hapen. Instead,
// we'll keep an internal state, and we'll use Google Maps API to manage it.
const Map = React.createClass({

  render () {
    if (!this.props.loaded) {
      return null
    }
    return (
      <div className='map-wrapper'>
        <div className='map' ref='map' />
      </div>
    )
  },

  // Define internal state.
  getInitialState () {
    return {
      loaded: false,
      countries: null,
      mapRendered: false,
      markersRendered: false
    }
  },

  componentWillReceiveProps (nextProps) {
    // Countries loaded
    if (!this.state.countries && nextProps.countries && !nextProps.countries.loading) {
      this.state.countries = nextProps.countries
      if (this.state.mapRendered) {
        this.loadMarkers()
      }
    }
    if (nextProps.countries && this.state.countries) {
      // Country selected
      if (nextProps.countries.selected !== this.state.countries.selected) {
        this.selectCountry(nextProps.countries.selected)
      }
      // Accent selected
      if (nextProps.countries.selectedAccent !== this.state.countries.selectedAccent) {
        this.selectAccent(nextProps.countries.selectedAccent)
      }
      this.state.countries = nextProps.countries
    }
  },

  // This component should never update after its initialisation as
  // the map would be reloaded.
  shouldComponentUpdate (nextProps) {
    if (!this.state.loaded && nextProps.loaded) {
      this.state.loaded = true
      return true
    }
    return false
  },

  // This is the first and only time the component is updated.
  componentDidUpdate (prevProps, prevState) {
    this.loadMap()
  },

  // Load the map
  loadMap () {
    const { google } = this.props
    const mapEl = ReactDOM.findDOMNode(this.refs.map)
    this.map = new google.maps.Map(mapEl, GOOGLE_MAPS_CONFIG)

    this.state.mapRendered = true
    if (this.state.countries && !this.state.countries.loading) {
      this.loadMarkers()
    }
  },

  // Create one marker in the map for each accent
  loadMarkers () {
    const { google } = this.props
    const { countries } = this.state
    for (const country of countries.items) {
      Object.keys(country.value.accents).forEach((key) => {
        const marker = new google.maps.Marker({
          position: country.value.accents[key].coords,
          title: 'My accent'
        })
        marker.addListener('click', () => {
          browserHistory.push('/' + country.key + '/' + key + '/')
        })
        marker.setMap(this.map)
      })
    }
    this.state.markersRendered = true
  },

  // Fit country in map using South West and North East coordinates
  selectCountry (selectedCountry) {
    if (selectedCountry !== null) {
      const { sw, ne } = selectedCountry.value.coords
      const bounds = new this.props.google.maps.LatLngBounds(sw, ne)
      this.map.fitBounds(bounds)
    }
  },

  // Move map center to accent location
  selectAccent (selectedAccent) {
    if (selectedAccent !== null) {
      this.map.panTo(selectedAccent.value.coords)
      this.map.setZoom(7)
    }
  },

  propTypes: {
    loaded: React.PropTypes.bool,
    google: React.PropTypes.object,
    countries: React.PropTypes.object
  }
})

export default GoogleApiComponent({
  apiKey: GOOGLE_MAPS_API_KEY
})(Map)
