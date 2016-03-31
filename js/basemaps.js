// Summary of a few base map (tiled) types that can be used with Leaflet.js
// ESRI and Stamen Design plugins are used

// Uncomment to run code in strict mode.  This helps with debugging.
//'use strict';

/****************
*** Variables ***
*****************/

var osm;
var usgsErosOrtho;
var esriTopo;
var stamenWatercolor;


/******************
*** L.tileLayer ***
*******************/ 

// API reference - http://leafletjs.com/reference.html#tilelayer
// Open Street Map
osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&#169; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, CC BY-SA license'
    // minZoom
    // maxZoom
});

// addTo(map) method is used to add layers and controls to the map interface
// Method can be chained at the end of a layer constructor
osm.addTo(map);


/**********************
*** L.tileLayer.wms ***
**********************/ 

// API reference - http://leafletjs.com/reference.html#tilelayer-wms
// USGS orthoimagery
usgsErosOrtho = L.tileLayer.wms('http://isse.cr.usgs.gov/arcgis/services/Orthoimagery/USGS_EROS_Ortho_1Foot/ImageServer/WMSServer', {
    layers: '0',
    format: 'image/png',
    version: '1.3.0',
    attribution: '<a href="http://gisdata.usgs.gov/service_access_list.php?serviceid=Dataset_7&dataset=HRO">USGS</a>'
}); //.addTo(map);


/***************************
*** ESRI Leaflet Plugin ****
*** L.esri.basemapLayer ****
****************************/

// API reference - http://esri.github.io/esri-leaflet/api-reference/layers/basemap-layer.html
// Topopgrahic base map from ArcGIS Online
esriTopo = L.esri.basemapLayer('Topographic'); //.addTo(map);


/************************************
*** Stamen Design Leaflet Plugin ****
*** L.StamenTileLayer ***************
*************************************/

// API reference - http://maps.stamen.com/
// Stamen Watercolor
stamenWatercolor = new L.StamenTileLayer('watercolor'); //.addTo(map);