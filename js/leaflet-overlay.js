// Select vector data formats inherent to Leaflet.js

// Uncomment to run code in strict mode.  This helps with debugging.
//'use strict';


/****************
*** Variables ***
*****************/ 

var berkeyIcon;
var berkeyPopupContent;
var berkey;
var pennStaterPathArray;
var pennStaterPath;
var lubertArray;
var lubert;


/************************
*** Marker - L.marker ***
*************************/

// Create icon to use with L.marker
// API reference - http://leafletjs.com/reference.html#icon
berkeyIcon = L.icon({
    iconUrl: 'images/popsicle.svg',
    iconSize: [40,40]    
});

// API reference - http://leafletjs.com/reference.html#marker
// Berkey Creamery
berkey = L.marker([40.8036,  -77.8625], {
    icon: berkeyIcon,
    title: 'Penn State Berkey Creamery',
    alt: 'popsicle representing Penn State Berkey Creamery'
}).addTo(map);

// Bind a popup to Berkey Creamery
// API reference - http://leafletjs.com/reference.html#popup
berkeyPopupContent = '<div>';
berkeyPopupContent += '<p>Berkey Creamery is located at 119 Rodney A. Erickson Food Science Building on the campus of Penn State University.</p>';
berkeyPopupContent += '<p>For more information, please visit their <a href="http://creamery.psu.edu/" target="_blank">website</a>.</p>';
berkeyPopupContent += '<p>Icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>';
berkeyPopupContent += '</div>';

// Add pop-up to layer
berkey.bindPopup(berkeyPopupContent);


/****************************
*** Polyline - L.polyline ***
*** Extends Path ************
****************************/ 

// Array of coordinates to hold geometry of Polyline
pennStaterPathArray = [
    [40.83106, -77.844290],
    [40.830929, -77.844462],
    [40.830775, -77.844655],
    [40.830682, -77.844880],
    [40.830674, -77.845095],
    [40.830816,-77.845299],
    [40.831072, -77.84581],
    [40.830914, -77.846034]
];

// API reference - http://leafletjs.com/reference.html#polyline
// API reference for Path - http://leafletjs.com/reference.html#path
// Generic path near Penn Stater Hotel
pennStaterPath = L.polyline(pennStaterPathArray, {
    // Options to symbolize Polyline
    color: '#f00',
    weight: 3.5,
    opacity: 1,
    dashArray: '5, 10'
}).addTo(map);


/**************************
*** Polygon - L.polygon ***
*** Extends Polyline ******
**************************/

// Array of coordinates to hold geometry of Polygon
lubertArray = [
    [40.833536, -77.842525],
    [40.833383, -77.842132],
    [40.833340, -77.842162],
    [40.833268, -77.841985],
    [40.833190, -77.842041],
    [40.833200, -77.842069],
    [40.833024, -77.842190],
    [40.833205, -77.842655],
    [40.833385, -77.842537],
    [40.833412, -77.842607]
];

// API reference - http://leafletjs.com/reference.html#polygon
// Lubert Building
lubert = L.polygon(lubertArray, {
    // Options to symbolize Polygon
    color: '#20E167',
    weight: 2.5,
    opacity: 1,
    fillColor: '#9AFFDE',
    fillOpacity: 0.5    
}).addTo(map);