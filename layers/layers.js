ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-73.030153, -36.830715, -73.005029, -36.813718]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Casakmz_1 = new ol.format.GeoJSON();
var features_Casakmz_1 = format_Casakmz_1.readFeatures(json_Casakmz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Casakmz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casakmz_1.addFeatures(features_Casakmz_1);
var lyr_Casakmz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casakmz_1, 
                style: style_Casakmz_1,
                popuplayertitle: 'Casa.kmz',
                interactive: true,
                title: 'Casa.kmz'
            });
var format_Reproyectada_2 = new ol.format.GeoJSON();
var features_Reproyectada_2 = format_Reproyectada_2.readFeatures(json_Reproyectada_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Reproyectada_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reproyectada_2.addFeatures(features_Reproyectada_2);
var lyr_Reproyectada_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reproyectada_2, 
                style: style_Reproyectada_2,
                popuplayertitle: 'Reproyectada',
                interactive: true,
                title: '<img src="styles/legend/Reproyectada_2.png" /> Reproyectada'
            });
var format_coord_transformadaUTM_3 = new ol.format.GeoJSON();
var features_coord_transformadaUTM_3 = format_coord_transformadaUTM_3.readFeatures(json_coord_transformadaUTM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_coord_transformadaUTM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coord_transformadaUTM_3.addFeatures(features_coord_transformadaUTM_3);
cluster_coord_transformadaUTM_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_coord_transformadaUTM_3
});
var lyr_coord_transformadaUTM_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_coord_transformadaUTM_3, 
                style: style_coord_transformadaUTM_3,
                popuplayertitle: 'coord_transformadaUTM',
                interactive: true,
                title: '<img src="styles/legend/coord_transformadaUTM_3.png" /> coord_transformadaUTM'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Casakmz_1.setVisible(true);lyr_Reproyectada_2.setVisible(true);lyr_coord_transformadaUTM_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Casakmz_1,lyr_Reproyectada_2,lyr_coord_transformadaUTM_3];
lyr_Casakmz_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Reproyectada_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_coord_transformadaUTM_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_PREGUNT': 'T_PREGUNT', 'N°_Preg_I': 'N°_Preg_I', 'N°_Preg_C': 'N°_Preg_C', 'Porc_Inc': 'Porc_Inc', 'Porc_Co': 'Porc_Co', 'Video': 'Video', 'Porc_Tot': 'Porc_Tot', 'Nombre': 'Nombre', });
lyr_Casakmz_1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Reproyectada_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_coord_transformadaUTM_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_PREGUNT': 'TextEdit', 'N°_Preg_I': 'Range', 'N°_Preg_C': 'Range', 'Porc_Inc': 'Range', 'Porc_Co': 'Range', 'Video': 'ExternalResource', 'Porc_Tot': 'Range', 'Nombre': 'TextEdit', });
lyr_Casakmz_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Reproyectada_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_coord_transformadaUTM_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_PREGUNT': 'inline label - always visible', 'N°_Preg_I': 'inline label - always visible', 'N°_Preg_C': 'inline label - always visible', 'Porc_Inc': 'inline label - always visible', 'Porc_Co': 'inline label - visible with data', 'Video': 'inline label - always visible', 'Porc_Tot': 'inline label - always visible', 'Nombre': 'inline label - always visible', });
lyr_coord_transformadaUTM_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});