import React from 'react'
import ReactDOM from 'react-dom'
import { googleMapsApiKey } from '../../../../config'
import getMapConfig from './config'
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent'
import './styles.scss'

class Map extends React.Component {
  componentDidUpdate (prevProps, prevState) {
    this.loadMap()
  }

  loadMap () {
    const { google } = this.props
    const mapEl = ReactDOM.findDOMNode(this.refs.map)
    this.map = new google.maps.Map(mapEl, getMapConfig(google))
  }

  render () {
    return (
      <div className='map-wrapper'>
        <div className='map' ref='map' />
      </div>
    )
  }
}

Map.propTypes = {
  google: React.PropTypes.object
}

export default GoogleApiComponent({
  apiKey: googleMapsApiKey
})(Map)
