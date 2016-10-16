export default (google) => ({
  center: new google.maps.LatLng(53.492185, -2.244880), // Manchester!
  zoom: 6,
  disableDefaultUI: true,
  styles: [
    {
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#0d47a1'
        }
      ]
    },
    {
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#ffffff'
        },
        {
          'lightness': 15
        },
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'lightness': 40
        },
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'administrative.country',
      'stylers': [
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'stylers': [
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'administrative.province',
      'stylers': [
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'landscape',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#f7f7f7'
        },
        {
          'lightness': 20
        },
        {
          'visibility': 'simplified'
        }
      ]
    },
    {
      'featureType': 'poi',
      'stylers': [
        {
          'color': '#ebebeb'
        },
        {
          'visibility': 'simplified'
        }
      ]
    },
    {
      'featureType': 'road',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'transit',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#cfd8dc'
        },
        {
          'lightness': 15
        }
      ]
    }
  ]
})
