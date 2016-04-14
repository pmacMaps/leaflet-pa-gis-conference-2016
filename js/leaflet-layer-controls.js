// Add a control to switch among basemaps and turn overlays on/off 

// Uncomment to run code in strict mode.  This helps with debugging.
//'use strict';


/****************
*** Variables ***
*****************/ 
var basemapsCollection;
var overlaysCollection;
var layersControl;


/*********************************************
*** Base Map Collection for Layer Control ****
**********************************************/

// Object to store name in control with basemap variable
// API reference - http://leafletjs.com/reference.html#control-layers
basemapsCollection = {
    'Open Street Map': osm,
    'EROS Imagery': usgsErosOrtho,
    'ESRI Topo': esriTopo,
    'Stamen Watercolor': stamenWatercolor
};


/*********************************************
*** Overlays Collection for Layer Control ****
**********************************************/

overlaysCollection = {
    "Berkery Creamery": berkey,
    "Penn Stater Path": pennStaterPath,
    "Lubert Building": lubert,
    "Pittsburgh Historict Districts": pittsburghHistorictDistricts
};


// Create layer control
layersControl = L.control.layers(basemapsCollection, overlaysCollection).addTo(map);
