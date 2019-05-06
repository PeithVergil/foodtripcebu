import React from 'react';
import ReactDOM from 'react-dom';

import Places from './components/places';


export class Map {
    constructor(elem) {
        this.map = new google.maps.Map(elem, {
          center: { lat: 0, lng: 0 },
          zoom: 15,
        });

        this.geo = new google.maps.Geocoder();

        this.geo.geocode({ 'address': 'Cebu City' }, (results, status) => {
            switch (status) {
                case 'OK':
                    this.onGeocodeDone(results[0].geometry.location);
                    break;
                default:
                    console.log(`Geocode was not successful: ${status}`);
                    break;
            }
        });

        this.info = new google.maps.InfoWindow();

        this.places = new google.maps.places.PlacesService(this.map);
    }

    onGeocodeDone(location) {
        // Center the map to this location.
        this.map.setCenter(location);

        // Search for restaurants near the area.
        let parameters = {
            location: location,
            radius: '500',
            query: 'restaurant',
            type: 'restaurant',
        };
        this.places.textSearch(parameters, (results, status) => {
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
          map: this.map,
        });

        google.maps.event.addListener(marker, 'click', () => {
            console.log(place.name);
        });
    }
}