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
      accents: null,
      countrySelected: null,
      accentSelected: null,
      countriesLoading: true,
      accentsLoading: true,
      mapRendered: false,
      markersRendered: false
    }
  },

  componentWillReceiveProps (nextProps) {
    // Accents loaded
    if (this.state.mapRendered && !this.state.markersRendered && !nextProps.accentsLoading) {
      this.loadMarkers(nextProps.accents)
    }
    // Country selected
    if (nextProps.countrySelected !== this.state.countrySelected) {
      this.selectCountry(nextProps.countrySelected)
    }
    // Accent selected
    if (nextProps.accentSelected !== this.state.accentSelected) {
      this.selectAccent(nextProps.accentSelected)
    }
    // Update component state
    if (this.state.loaded) {
      this.state = { ...this.state, ...nextProps }
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
    if (!this.state.accentsLoading) {
      this.loadMarkers(this.state.accents)
    }
  },

  // Create one marker in the map for each accent
  loadMarkers (accents) {
    const { google } = this.props

    Object.keys(accents.byId).forEach((id) => {
      const marker = new google.maps.Marker({
        position: accents.byId[id].coords
      })
      marker.addListener('click', () => {
        browserHistory.push('/' + accents.byId[id].country + '/' + id + '/')
      })
      marker.setMap(this.map)
    })
    this.state.markersRendered = true
  },

  // Fit country in map using South West and North East coordinates
  selectCountry (selectedCountry) {
    if (selectedCountry !== null) {
      const { sw, ne } = this.state.countries.byId[selectedCountry].coords
      const bounds = new this.props.google.maps.LatLngBounds(sw, ne)
      this.map.fitBounds(bounds)
    }
  },

  // Move map center to accent location
  selectAccent (selectedAccent) {
    if (selectedAccent !== null) {
      this.map.panTo(this.state.accents.byId[selectedAccent].coords)
      this.map.setZoom(7)
    }
  },

  propTypes: {
    loaded: React.PropTypes.bool,
    google: React.PropTypes.object,
    countries: React.PropTypes.object,
    accents: React.PropTypes.object,
    countriesLoading: React.PropTypes.bool,
    accentsLoading: React.PropTypes.bool,
    countrySelected: React.PropTypes.string,
    accentSelected: React.PropTypes.string
  }
})

export default GoogleApiComponent({
  apiKey: GOOGLE_MAPS_API_KEY
})(Map)
