import React from 'react';
import ReactDOM from 'react-dom';

import Places from './places';


export class Maps extends React.Component {

    constructor(props) {
        super(props);

        this.geo = new google.maps.Geocoder();
        this.places = new google.maps.places.PlacesService(props.map);
    }
    
    componentDidMount() {
        console.log('Component mounted...');

        let params = {
            'address': 'Cebu City',
        };

        this.geo.geocode(params, (results, status) => {
            switch (status) {
                case 'OK':
                    this.onGeocodeDone(results[0].geometry.location);
                    break;
                default:
                    console.log(`Geocode was not successful: ${status}`);
                    break;
            }
        });
    }

    onGeocodeDone(location) {
        console.log('Geocode done...');

        // Center the map to this location.
        this.props.map.setCenter(location);

        // Search for restaurants near the area.
        let params = {
            location: location,
            radius: '500',
            query: 'restaurant',
            type: 'restaurant',
        };
        this.places.textSearch(params, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                // Put markers on the map.
                for (const result of results) {
                    this.createPlaceMarker(result);
                }

                // Display them in a list.
                ReactDOM.render(<Places items={results} />, document.getElementById('places'));
            } else {
                console.log(`Places service was not successful: ${status}`);
            }
        });
    }

    createPlaceMarker(place) {
        let marker = new google.maps.Marker({
          position: place.geometry.location,
          map: this.props.map,
        });

        google.maps.event.addListener(marker, 'click', () => {
            console.log(place.name);
        });
    }

    render() {
        return <div></div>;
    }
}