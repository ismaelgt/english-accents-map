/* eslint-disable react/no-unused-prop-types */

import React from 'react'
import PropTypes from 'prop-types'
import { history } from '../../../../services/location'
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent'
import { GOOGLE_MAPS_API_KEY } from '../../../../config'
import GOOGLE_MAPS_CONFIG from './config'
import './styles.scss'

// This component will not re-render in response to redux state or prop
// changes. We don't want to reload the map everytime these hapen. Instead,
// we'll keep an internal state, and we'll use Google Maps API to manage it.
class Map extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loaded: false,
      smallScreen: null,
      countries: null,
      accents: null,
      countrySelected: null,
      accentSelected: null,
      loading: null,
      mapRendered: false,
      markersRendered: false
    }
  }

  render () {
    return (
      <div className='map-wrapper'>
        <div className='map' ref='map' />
      </div>
    )
  }

  componentWillReceiveProps (nextProps) {
    if (!this.state.loaded && nextProps.loaded) {
      return
    }

    if (this.state.mapRendered) {
      // Accents loaded
      if (!this.state.markersRendered && !nextProps.loading) {
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
  }

  // This component should never update after its initialisation as
  // the map would be reloaded.
  shouldComponentUpdate (nextProps) {
    if (!this.state.loaded && nextProps.loaded) {
      return true
    }
    return false
  }

  // This is the first and only time the component is updated.
  componentDidUpdate (prevProps, prevState) {
    this.state = { ...this.state, ...this.props, loaded: true }
    this.loadMap()
  }

  // Load the map
  loadMap () {
    const { google } = this.props
    this.map = new google.maps.Map(this.refs.map, GOOGLE_MAPS_CONFIG)

    this.state.mapRendered = true
    if (!this.state.loading) {
      this.loadMarkers(this.state.accents, this.state.countries)
    }
    if (this.state.countrySelected) {
      this.selectCountry(this.state.countries, this.state.countrySelected, this.state.smallScreen)
    }
  }

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
          history.push('/' + accent.country + '/' + id + '/#' + accent.videos[0])
        }
      })
      marker.setMap(this.map)
    })
    this.state.markersRendered = true
  }

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
  }

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
  }
}

Map.propTypes = {
  loaded: PropTypes.bool,
  google: PropTypes.object,
  smallScreen: PropTypes.bool,
  countries: PropTypes.object,
  accents: PropTypes.object,
  loading: PropTypes.bool,
  countrySelected: PropTypes.string,
  accentSelected: PropTypes.string
}

export default GoogleApiComponent({
  apiKey: GOOGLE_MAPS_API_KEY,
  version: '3',
  libraries: []
})(Map)
