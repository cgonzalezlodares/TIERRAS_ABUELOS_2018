ol.proj.get("EPSG:3042").setExtent([468317.648126, 4336835.097540, 571550.526939, 4406817.868398]);
var wms_layers = [];

        var lyr_PNOASpain_0 = new ol.layer.Tile({
            'title': 'PNOASpain_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="">PNOA</a>'})],
                url: 'http://www.ign.es/wmts/pnoa-ma?request=GetTile&service=WMTS&VERSION=1.0.0&Layer=OI.OrthoimageCoverage&Style=default&Format=image/png&TileMatrixSet=GoogleMapsCompatible&TileMatrix={z}&TileRow={y}&TileCol={x}'
            })
        });
        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSMStandard_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_TIERRAS_ABUELOS_2 = new ol.format.GeoJSON();
var features_TIERRAS_ABUELOS_2 = format_TIERRAS_ABUELOS_2.readFeatures(json_TIERRAS_ABUELOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3042'});
var jsonSource_TIERRAS_ABUELOS_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TIERRAS_ABUELOS_2.addFeatures(features_TIERRAS_ABUELOS_2);var lyr_TIERRAS_ABUELOS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TIERRAS_ABUELOS_2, 
                style: style_TIERRAS_ABUELOS_2,
                title: '<img src="styles/legend/TIERRAS_ABUELOS_2.png" /> TIERRAS_ABUELOS'
            });

lyr_OSMStandard_1.setVisible(true);lyr_TIERRAS_ABUELOS_2.setVisible(true);
var layersList = [lyr_PNOASpain_0,lyr_OSMStandard_1,lyr_TIERRAS_ABUELOS_2];
lyr_TIERRAS_ABUELOS_2.set('fieldAliases', {'MUNICIPIO': 'MUNICIPIO', 'PROVINCIA': 'PROVINCIA', 'FINCA': 'FINCA', 'CATASTRO': 'CATASTRO', });
lyr_TIERRAS_ABUELOS_2.set('fieldImages', {'MUNICIPIO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'FINCA': 'TextEdit', 'CATASTRO': 'TextEdit', });
lyr_TIERRAS_ABUELOS_2.set('fieldLabels', {'MUNICIPIO': 'no label', 'PROVINCIA': 'no label', 'FINCA': 'no label', 'CATASTRO': 'no label', });
lyr_TIERRAS_ABUELOS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});