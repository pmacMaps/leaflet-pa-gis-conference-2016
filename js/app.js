'use strict';

/****************
*** Variables ***
*****************/
var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var map;
// Base maps
var osm;
var usgsErosOrtho;
var esriTopo;
var stamenWatercolor;
// Overlays
var berkeyIcon;
var berkeyPopupContent;
var berkey;
var pennStaterPathArray;
var pennStaterPath;
var lubertArray;
var lubert;
var pittsburghHistorictDistricts;
// Controls
var zoomHome;
var basemapsCollection;
var overlaysCollection;
var isCollapsed;
var layersControl;
var pittBtn;
var berkeyBtn;


/***************
*** Basemaps ***
***************/

osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&#169; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, CC BY-SA license'
});

usgsErosOrtho = L.tileLayer.wms('http://isse.cr.usgs.gov/arcgis/services/Orthoimagery/USGS_EROS_Ortho_1Foot/ImageServer/WMSServer', {
    layers: '0',
    format: 'image/png',
    version: '1.3.0',
    attribution: '<a href="http://gisdata.usgs.gov/service_access_list.php?serviceid=Dataset_7&dataset=HRO">USGS</a>'
});

esriTopo = L.esri.basemapLayer('Topographic');

stamenWatercolor = new L.StamenTileLayer('watercolor');


/***************
*** Overlays ***
***************/

// Berkey Creamery Icon
berkeyIcon = L.icon({
    iconUrl: 'images/popsicle.svg',
    iconSize: [40,40]    
});

// Berkey Creamery
berkey = L.marker([40.8036,  -77.8625], {
    icon: berkeyIcon,
    title: 'Penn State Berkey Creamery',
    alt: 'popsicle representing Penn State Berkey Creamery'
});

// Berkey Creamery Pop-up Content
berkeyPopupContent = '<div>';
berkeyPopupContent += '<p>Berkey Creamery is located at 119 Rodney A. Erickson Food Science Building on the campus of Penn State University.</p>';
berkeyPopupContent += '<p>For more information, please visit their <a href="http://creamery.psu.edu/" target="_blank">website</a>.</p>';
berkeyPopupContent += '<p>Icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>';
berkeyPopupContent += '</div>';

// Add pop-up to layer
berkey.bindPopup(berkeyPopupContent);

// Penn Stater Path geometry array
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

// Generic path near Penn Stater Hotel
pennStaterPath = L.polyline(pennStaterPathArray, {
    color: '#f00',
    weight: 3.5,
    opacity: 1,
    dashArray: '5, 10'
});

// Lubert Building geometry array
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

// Lubert Building
lubert = L.polygon(lubertArray, {
    color: '#20E167',
    weight: 2.5,
    opacity: 1,
    fillColor: '#9AFFDE',
    fillOpacity: 0.5    
});

// Pittsburgh City Historic Districts
pittsburghHistorictDistricts = new L.GeoJSON.AJAX("js/geojson/pittsburgh-historic-districts.geojson", {
    style: function(feature) {
        return {
            color: '#000',
            weight: 2.5,
            opacity: 1,
            fillColor: '#84AE6A',
            fillOpacity: 0.5
        }
    },    
    onEachFeature: function (feature, layer) {
        var name = feature.properties.NAME;
        layer.bindPopup('<h1>' + name + '</h1>');
    }
});

// Construct map
map = L.map('map', {
  center: [40.8314, -77.8452],
  zoom: 15,
  layers: [osm, berkey, pennStaterPath, lubert, pittsburghHistorictDistricts],
  zoomControl: false
});

// Basemaps group
basemapsCollection = {
    'Open Street Map': osm,
    'EROS Imagery': usgsErosOrtho,
    'ESRI Topo': esriTopo,
    'Stamen Watercolor': stamenWatercolor
};

// Zome Home control
zoomHome = L.Control.zoomHome({
    position: 'topleft',
    zoomHomeTitle: 'Full map extent',
    homeCoordinates: [40.8314, -77.8452],
    homeZoom: 15 
}).addTo(map);

// Overlays group
overlaysCollection = {
    "Berkery Creamery": berkey,
    "Penn Stater Path": pennStaterPath,
    "Luberty Building": lubert,
    "Pittsburgh Historict Districts": pittsburghHistorictDistricts
};

// Set collapsed option for layer control based upon viewport width
if (viewportWidth < 768) {
    isCollapsed = true;
} else {
    isCollapsed = false;
}

// Layer control
layersControl = L.control.layers(basemapsCollection, overlaysCollection, {
    collapsed: isCollapsed
}).addTo(map);

// Event Listeners
// Display controls after page loads
window.addEventListener('DOMContentLoaded', function() {
    var pittBtn = document.getElementById('pittBtn');
    pittBtn.style.display = 'block'; 
    var berkeyBtn = document.getElementById('berkeyBtn');
    berkeyBtn.style.display = 'block';
}, false);

// Zoom to pittsburgh historict districts from button 
pittBtn = document.getElementById('pittBtn');

pittBtn.addEventListener('click', function() {
    map.fitBounds(pittsburghHistorictDistricts.getBounds());
}, false);

// Zoom to berkey creamery from button 
berkeyBtn = document.getElementById('berkeyBtn');

berkeyBtn.addEventListener('click', function() {
    map.setView(berkey.getLatLng(), 17);
}, false);