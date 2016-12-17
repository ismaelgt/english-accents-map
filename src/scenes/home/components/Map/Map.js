import React from 'react'
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
      smallScreen: null,
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
    if (!this.state.loaded && nextProps.loaded) {
      return
    }

    if (this.state.mapRendered) {
      // Accents loaded
      if (!this.state.markersRendered && !nextProps.accentsLoading && !nextProps.countriesLoading) {
        this.loadMarkers(nextProps.accents, nextProps.countries)
      }
      // Country selected
      if (nextProps.countrySelected !== this.state.countrySelected) {
        this.selectCountry(nextProps.countries, nextProps.countrySelected, nextProps.smallScreen)
      }
      // Accent selected
      if (nextProps.accentSelected !== this.state.accentSelected) {
        this.selectAccent(nextProps.countries, nextProps.accents, nextProps.accentSelected)
      }
    }

    // Update component state.
    // We don't want asynchronous state updates as this component doesn't re-render
    this.state = { ...this.state, ...nextProps }
  },

  // This component should never update after its initialisation as
  // the map would be reloaded.
  shouldComponentUpdate (nextProps) {
    if (!this.state.loaded && nextProps.loaded) {
      return true
    }
    return false
  },

  // This is the first and only time the component is updated.
  componentDidUpdate (prevProps, prevState) {
    this.state = { ...this.state, ...this.props, loaded: true }
    this.loadMap()
  },

  // Load the map
  loadMap () {
    const { google } = this.props
    this.map = new google.maps.Map(this.refs.map, GOOGLE_MAPS_CONFIG)

    this.state.mapRendered = true
    if (!this.state.accentsLoading && !this.state.countriesLoading) {
      this.loadMarkers(this.state.accents, this.state.countries)
    }
  },

  // Create one marker in the map for each accent
  loadMarkers (accents, countries) {
    const { google } = this.props

    Object.keys(accents.byId).forEach((id) => {
      const accent = accents.byId[id]
      if (!accent.coords || !countries.byId[accent.country]) {
        return
      }
      const marker = new google.maps.Marker({
        position: accent.coords
      })
      marker.addListener('click', () => {
        if (this.state.accentSelected !== id) {
          browserHistory.push('/' + accent.country + '/' + id + '/#' + accent.videos[0])
        }
      })
      marker.setMap(this.map)
    })
    this.state.markersRendered = true
  },

  // Fit country in map using South West and North East coordinates
  selectCountry (countries, selectedCountryId, smallScreen) {
    if (selectedCountryId !== null) {
      const { sw, ne } = countries.byId[selectedCountryId].coords
      const bounds = new this.props.google.maps.LatLngBounds(sw, ne)
      // fitBounds will zoom out excessively on mobile
      if (smallScreen) {
        this.props.google.maps.event.addListenerOnce(this.map, 'bounds_changed', function () {
          this.setZoom(countries.byId[selectedCountryId].zoom - 3)
        })
      }
      this.map.fitBounds(bounds)
    }
  },

  // Move map center to accent location
  selectAccent (countries, accents, selectedAccentId) {
    if (selectedAccentId !== null) {
      const selectedAccent = accents.byId[selectedAccentId]
      if (selectedAccent.coords) {
        const selectedCountry = countries.byId[selectedAccent.country]
        this.map.panTo(selectedAccent.coords)
        this.map.setZoom(selectedCountry.zoom)
      }
    }
  },

  propTypes: {
    loaded: React.PropTypes.bool,
    google: React.PropTypes.object,
    smallScreen: React.PropTypes.bool,
    countries: React.PropTypes.object,
    accents: React.PropTypes.object,
    countriesLoading: React.PropTypes.bool,
    accentsLoading: React.PropTypes.bool,
    countrySelected: React.PropTypes.string,
    accentSelected: React.PropTypes.string
  }
})

export default GoogleApiComponent({
  apiKey: GOOGLE_MAPS_API_KEY,
  version: '3',
  libraries: []
})(Map)
