import React from 'react';
import ReactDOM from 'react-dom';

import {
    Maps
} from './components/maps';
import {
    MapBox
} from './components/buttons';


(function() {
    window.initMap = function() {
        let gmap = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 0,
                lng: 0,
            },
            zoom: 15,
        });

        let rect = new google.maps.Rectangle({
            draggable: true,
            editable: true,
            bounds: {
                north: 44.599,
                south: 44.490,
                east: -78.443,
                west: -78.649,
            },
            map: gmap,
        });

        // Mount the component that wraps Google Maps.
        ReactDOM.render(<Maps map={gmap} rect={rect} />, document.getElementById('maps'));
        
        // Display the buttons for creating/removing the map box.
        ReactDOM.render(<MapBox map={gmap} rect={rect} />, document.getElementById('mapbox'));
    };
}());
