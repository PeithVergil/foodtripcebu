import React from 'react';
import ReactDOM from 'react-dom';

import {
    Map
} from './map';
import {
    MapBox
} from './components/buttons';


(function() {
    window.initMap = function() {
        let map = new Map(document.getElementById('map'));

        // Display them buttons for creating/removing the map box.
        ReactDOM.render(<MapBox map={map.map} />, document.getElementById('mapbox'));
    };
}());
