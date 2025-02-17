ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32628").setExtent([222636.129318, 1564534.141138, 536474.068884, 1727264.924617]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LIMITESCOMMUNESBAN_1 = new ol.format.GeoJSON();
var features_LIMITESCOMMUNESBAN_1 = format_LIMITESCOMMUNESBAN_1.readFeatures(json_LIMITESCOMMUNESBAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_LIMITESCOMMUNESBAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESCOMMUNESBAN_1.addFeatures(features_LIMITESCOMMUNESBAN_1);
var lyr_LIMITESCOMMUNESBAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITESCOMMUNESBAN_1, 
                style: style_LIMITESCOMMUNESBAN_1,
                popuplayertitle: 'LIMITES COMMUNES BAN',
                interactive: true,
                title: '<img src="styles/legend/LIMITESCOMMUNESBAN_1.png" /> LIMITES COMMUNES BAN'
            });
var format_COMMUNESCOUVERTES_2 = new ol.format.GeoJSON();
var features_COMMUNESCOUVERTES_2 = format_COMMUNESCOUVERTES_2.readFeatures(json_COMMUNESCOUVERTES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_COMMUNESCOUVERTES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNESCOUVERTES_2.addFeatures(features_COMMUNESCOUVERTES_2);
var lyr_COMMUNESCOUVERTES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNESCOUVERTES_2, 
                style: style_COMMUNESCOUVERTES_2,
                popuplayertitle: 'COMMUNES COUVERTES',
                interactive: false,
                title: '<img src="styles/legend/COMMUNESCOUVERTES_2.png" /> COMMUNES COUVERTES'
            });
var format_SHEP2_3 = new ol.format.GeoJSON();
var features_SHEP2_3 = format_SHEP2_3.readFeatures(json_SHEP2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_SHEP2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHEP2_3.addFeatures(features_SHEP2_3);
var lyr_SHEP2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHEP2_3, 
                style: style_SHEP2_3,
                popuplayertitle: 'SHEP2',
                interactive: true,
                title: '<img src="styles/legend/SHEP2_3.png" /> SHEP2'
            });
var format_DOUNDALSOUF_4 = new ol.format.GeoJSON();
var features_DOUNDALSOUF_4 = format_DOUNDALSOUF_4.readFeatures(json_DOUNDALSOUF_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_DOUNDALSOUF_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOUNDALSOUF_4.addFeatures(features_DOUNDALSOUF_4);
var lyr_DOUNDALSOUF_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DOUNDALSOUF_4, 
                style: style_DOUNDALSOUF_4,
                popuplayertitle: 'DOUNDAL SOUF',
                interactive: true,
                title: '<img src="styles/legend/DOUNDALSOUF_4.png" /> DOUNDAL SOUF'
            });
var format_PARIIS_5 = new ol.format.GeoJSON();
var features_PARIIS_5 = format_PARIIS_5.readFeatures(json_PARIIS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PARIIS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARIIS_5.addFeatures(features_PARIIS_5);
var lyr_PARIIS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARIIS_5, 
                style: style_PARIIS_5,
                popuplayertitle: 'PARIIS',
                interactive: true,
                title: '<img src="styles/legend/PARIIS_5.png" /> PARIIS'
            });
var format_AGRIJEUNE_6 = new ol.format.GeoJSON();
var features_AGRIJEUNE_6 = format_AGRIJEUNE_6.readFeatures(json_AGRIJEUNE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_AGRIJEUNE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIJEUNE_6.addFeatures(features_AGRIJEUNE_6);
var lyr_AGRIJEUNE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRIJEUNE_6, 
                style: style_AGRIJEUNE_6,
                popuplayertitle: 'AGRIJEUNE',
                interactive: true,
                title: '<img src="styles/legend/AGRIJEUNE_6.png" /> AGRIJEUNE'
            });
var format_DEKKILSOUF_7 = new ol.format.GeoJSON();
var features_DEKKILSOUF_7 = format_DEKKILSOUF_7.readFeatures(json_DEKKILSOUF_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_DEKKILSOUF_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEKKILSOUF_7.addFeatures(features_DEKKILSOUF_7);
var lyr_DEKKILSOUF_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEKKILSOUF_7, 
                style: style_DEKKILSOUF_7,
                popuplayertitle: 'DEKKIL SOUF',
                interactive: true,
                title: '<img src="styles/legend/DEKKILSOUF_7.png" /> DEKKIL SOUF'
            });
var format_PROVALECV_8 = new ol.format.GeoJSON();
var features_PROVALECV_8 = format_PROVALECV_8.readFeatures(json_PROVALECV_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PROVALECV_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVALECV_8.addFeatures(features_PROVALECV_8);
var lyr_PROVALECV_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVALECV_8, 
                style: style_PROVALECV_8,
                popuplayertitle: 'PROVALE-CV',
                interactive: true,
                title: '<img src="styles/legend/PROVALECV_8.png" /> PROVALE-CV'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LIMITESCOMMUNESBAN_1.setVisible(true);lyr_COMMUNESCOUVERTES_2.setVisible(true);lyr_SHEP2_3.setVisible(true);lyr_DOUNDALSOUF_4.setVisible(true);lyr_PARIIS_5.setVisible(true);lyr_AGRIJEUNE_6.setVisible(true);lyr_DEKKILSOUF_7.setVisible(true);lyr_PROVALECV_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LIMITESCOMMUNESBAN_1,lyr_COMMUNESCOUVERTES_2,lyr_SHEP2_3,lyr_DOUNDALSOUF_4,lyr_PARIIS_5,lyr_AGRIJEUNE_6,lyr_DEKKILSOUF_7,lyr_PROVALECV_8];
lyr_LIMITESCOMMUNESBAN_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', });
lyr_COMMUNESCOUVERTES_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_SHEP2_3.set('fieldAliases', {'NOM': 'NOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_DOUNDALSOUF_4.set('fieldAliases', {'NOM': 'NOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_PARIIS_5.set('fieldAliases', {'NOM': 'NOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_AGRIJEUNE_6.set('fieldAliases', {'NOM': 'NOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_DEKKILSOUF_7.set('fieldAliases', {'ID': 'ID', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_PROVALECV_8.set('fieldAliases', {'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_LIMITESCOMMUNESBAN_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', });
lyr_COMMUNESCOUVERTES_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_SHEP2_3.set('fieldImages', {'NOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_DOUNDALSOUF_4.set('fieldImages', {'NOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PARIIS_5.set('fieldImages', {'NOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_AGRIJEUNE_6.set('fieldImages', {'NOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_DEKKILSOUF_7.set('fieldImages', {'ID': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PROVALECV_8.set('fieldImages', {'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_LIMITESCOMMUNESBAN_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', });
lyr_COMMUNESCOUVERTES_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_SHEP2_3.set('fieldLabels', {'NOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_DOUNDALSOUF_4.set('fieldLabels', {'NOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PARIIS_5.set('fieldLabels', {'NOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_AGRIJEUNE_6.set('fieldLabels', {'NOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_DEKKILSOUF_7.set('fieldLabels', {'ID': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PROVALECV_8.set('fieldLabels', {'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PROVALECV_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});