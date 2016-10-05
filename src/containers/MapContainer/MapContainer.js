import React from 'react'
import { GOOGLE_MAPS_API_KEY } from '../../config'
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent'
import Map from '../../components/Map/Map'

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} />
    )
  }
}

export default GoogleApiComponent({
  apiKey: GOOGLE_MAPS_API_KEY
})(MapContainer)
