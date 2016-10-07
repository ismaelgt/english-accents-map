import React from 'react'
import ReactDOM from 'react-dom'
import { GOOGLE_MAPS_API_KEY } from '../../config'
import getMapConfig from './Map.config'
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent'
import styles from './Map.scss'

class Map extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
     const {google} = this.props;
     const mapEl = ReactDOM.findDOMNode(this.refs.map);
     this.map = new google.maps.Map(mapEl, getMapConfig(google));
    }
  }

  render() {
    return (
      <div className="map-wrapper">
        <div className='map' ref='map' />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: GOOGLE_MAPS_API_KEY
})(Map)
