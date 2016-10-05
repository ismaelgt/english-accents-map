import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Map.scss'

export default class Map extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
     // google is available
     const {google} = this.props;
     const maps = google.maps;

     const mapRef = this.refs.map;
     const node = ReactDOM.findDOMNode(mapRef);
     const styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]}]

     let zoom = 6;
     let lat = 53.492185;
     let lng = -2.244880;
     const center = new maps.LatLng(lat, lng);
     const mapConfig = Object.assign({}, {
       center: center,
       zoom: zoom,
       styles: styles,
       disableDefaultUI: true
     })
     this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    return (
      <div className='map' ref='map' />
    )
  }
}
