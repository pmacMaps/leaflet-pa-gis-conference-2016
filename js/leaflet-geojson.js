// Adding GeoJSON data using Leaflet AJAX plugin.
// You could also use the jQuery getJSON method - http://api.jquery.com/jquery.getjson/

// Uncomment to run code in strict mode.  This helps with debugging.
//'use strict';

/****************
*** Variables ***
*****************/

var pittsburghHistorictDistricts;


/**************************
*** GeoJSON - L.geoJson ***
**************************/

// GeoJSON reference - http://geojson.org/
// API reference - http://leafletjs.com/reference.html#geojson
// Leaflet AJAX plugin - https://github.com/calvinmetcalf/leaflet-ajax
pittsburghHistorictDistricts = new L.GeoJSON.AJAX("js/geojson/pittsburgh-historic-districts.geojson", {
    // Style the layer
        style: function(feature) {
            return {
                color: '#000',
                weight: 2.5,
                opacity: 1,
                fillColor: '#84AE6A',
                fillOpacity: 0.5
            }
        },    
        // Create a pop-up for each feature
        onEachFeature: function (feature, layer) {
            // store NAME property in a variable
            var name = feature.properties.NAME;

            // Populate popoup with content from GeoJSON properties
            layer.bindPopup('<h1>' + name + '</h1>');
        }
}).addTo(map);