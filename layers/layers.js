var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Toner',
    'type': 'base',
        source: new ol.source.Stamen({
        layer: 'toner'
        })
})
]
});
var format_Minera_0 = new ol.format.GeoJSON();
var features_Minera_0 = format_Minera_0.readFeatures(json_Minera_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Minera_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Minera_0.addFeatures(features_Minera_0);var lyr_Minera_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Minera_0, 
                style: style_Minera_0,
                title: '<img src="styles/legend/Minera_0.png" /> Minería'
            });var format_Petroleo_1 = new ol.format.GeoJSON();
var features_Petroleo_1 = format_Petroleo_1.readFeatures(json_Petroleo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Petroleo_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Petroleo_1.addFeatures(features_Petroleo_1);var lyr_Petroleo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Petroleo_1, 
                style: style_Petroleo_1,
                title: '<img src="styles/legend/Petroleo_1.png" /> Petroleo'
            });var format_Territorio_indigena_2 = new ol.format.GeoJSON();
var features_Territorio_indigena_2 = format_Territorio_indigena_2.readFeatures(json_Territorio_indigena_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Territorio_indigena_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Territorio_indigena_2.addFeatures(features_Territorio_indigena_2);var lyr_Territorio_indigena_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Territorio_indigena_2, 
                style: style_Territorio_indigena_2,
                title: '<img src="styles/legend/Territorio_indigena_2.png" /> Territorio_indigena'
            });var format_snap_ctea_3 = new ol.format.GeoJSON();
var features_snap_ctea_3 = format_snap_ctea_3.readFeatures(json_snap_ctea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snap_ctea_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_snap_ctea_3.addFeatures(features_snap_ctea_3);var lyr_snap_ctea_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_snap_ctea_3, 
                style: style_snap_ctea_3,
                title: '<img src="styles/legend/snap_ctea_3.png" /> snap_ctea'
            });var format_Zona_intangibles_4 = new ol.format.GeoJSON();
var features_Zona_intangibles_4 = format_Zona_intangibles_4.readFeatures(json_Zona_intangibles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_intangibles_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Zona_intangibles_4.addFeatures(features_Zona_intangibles_4);var lyr_Zona_intangibles_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zona_intangibles_4, 
                style: style_Zona_intangibles_4,
                title: '<img src="styles/legend/Zona_intangibles_4.png" /> Zona_intangibles'
            });var format_rea_influencia_directa_5 = new ol.format.GeoJSON();
var features_rea_influencia_directa_5 = format_rea_influencia_directa_5.readFeatures(json_rea_influencia_directa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rea_influencia_directa_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rea_influencia_directa_5.addFeatures(features_rea_influencia_directa_5);var lyr_rea_influencia_directa_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rea_influencia_directa_5, 
                style: style_rea_influencia_directa_5,
                title: '<img src="styles/legend/rea_influencia_directa_5.png" /> Área_influencia_directa'
            });var format_rea_influencia_indirecta_6 = new ol.format.GeoJSON();
var features_rea_influencia_indirecta_6 = format_rea_influencia_indirecta_6.readFeatures(json_rea_influencia_indirecta_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rea_influencia_indirecta_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rea_influencia_indirecta_6.addFeatures(features_rea_influencia_indirecta_6);var lyr_rea_influencia_indirecta_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rea_influencia_indirecta_6, 
                style: style_rea_influencia_indirecta_6,
                title: '<img src="styles/legend/rea_influencia_indirecta_6.png" /> Área_influencia_indirecta'
            });var format_Franja_diversidad_vida_7 = new ol.format.GeoJSON();
var features_Franja_diversidad_vida_7 = format_Franja_diversidad_vida_7.readFeatures(json_Franja_diversidad_vida_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Franja_diversidad_vida_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Franja_diversidad_vida_7.addFeatures(features_Franja_diversidad_vida_7);var lyr_Franja_diversidad_vida_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Franja_diversidad_vida_7, 
                style: style_Franja_diversidad_vida_7,
                title: '<img src="styles/legend/Franja_diversidad_vida_7.png" /> Franja_diversidad_vida'
            });var format_Hidroelctricas_8 = new ol.format.GeoJSON();
var features_Hidroelctricas_8 = format_Hidroelctricas_8.readFeatures(json_Hidroelctricas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidroelctricas_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Hidroelctricas_8.addFeatures(features_Hidroelctricas_8);var lyr_Hidroelctricas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hidroelctricas_8, 
                style: style_Hidroelctricas_8,
                title: '<img src="styles/legend/Hidroelctricas_8.png" /> Hidroeléctricas'
            });var format_Comunidades_indigenas_ctea_9 = new ol.format.GeoJSON();
var features_Comunidades_indigenas_ctea_9 = format_Comunidades_indigenas_ctea_9.readFeatures(json_Comunidades_indigenas_ctea_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunidades_indigenas_ctea_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Comunidades_indigenas_ctea_9.addFeatures(features_Comunidades_indigenas_ctea_9);var lyr_Comunidades_indigenas_ctea_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comunidades_indigenas_ctea_9, 
                style: style_Comunidades_indigenas_ctea_9,
                title: '<img src="styles/legend/Comunidades_indigenas_ctea_9.png" /> Comunidades_indigenas_ctea'
            });var format_Proyectos_postulados_2022_10 = new ol.format.GeoJSON();
var features_Proyectos_postulados_2022_10 = format_Proyectos_postulados_2022_10.readFeatures(json_Proyectos_postulados_2022_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectos_postulados_2022_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Proyectos_postulados_2022_10.addFeatures(features_Proyectos_postulados_2022_10);var lyr_Proyectos_postulados_2022_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proyectos_postulados_2022_10, 
                style: style_Proyectos_postulados_2022_10,
                title: '<img src="styles/legend/Proyectos_postulados_2022_10.png" /> Proyectos_postulados_2022'
            });var format_Proyectos_postulados_2021_11 = new ol.format.GeoJSON();
var features_Proyectos_postulados_2021_11 = format_Proyectos_postulados_2021_11.readFeatures(json_Proyectos_postulados_2021_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectos_postulados_2021_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Proyectos_postulados_2021_11.addFeatures(features_Proyectos_postulados_2021_11);var lyr_Proyectos_postulados_2021_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proyectos_postulados_2021_11, 
                style: style_Proyectos_postulados_2021_11,
                title: '<img src="styles/legend/Proyectos_postulados_2021_11.png" /> Proyectos_postulados_2021'
            });var format_Proyectos_priorizacion_2022_12 = new ol.format.GeoJSON();
var features_Proyectos_priorizacion_2022_12 = format_Proyectos_priorizacion_2022_12.readFeatures(json_Proyectos_priorizacion_2022_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectos_priorizacion_2022_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Proyectos_priorizacion_2022_12.addFeatures(features_Proyectos_priorizacion_2022_12);var lyr_Proyectos_priorizacion_2022_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proyectos_priorizacion_2022_12, 
                style: style_Proyectos_priorizacion_2022_12,
                title: '<img src="styles/legend/Proyectos_priorizacion_2022_12.png" /> Proyectos_priorizacion_2022'
            });var format_Proyectos_priorizacion_2021_13 = new ol.format.GeoJSON();
var features_Proyectos_priorizacion_2021_13 = format_Proyectos_priorizacion_2021_13.readFeatures(json_Proyectos_priorizacion_2021_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectos_priorizacion_2021_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Proyectos_priorizacion_2021_13.addFeatures(features_Proyectos_priorizacion_2021_13);var lyr_Proyectos_priorizacion_2021_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proyectos_priorizacion_2021_13, 
                style: style_Proyectos_priorizacion_2021_13,
                title: '<img src="styles/legend/Proyectos_priorizacion_2021_13.png" /> Proyectos_priorizacion_2021'
            });

lyr_Minera_0.setVisible(true);lyr_Petroleo_1.setVisible(true);lyr_Territorio_indigena_2.setVisible(true);lyr_snap_ctea_3.setVisible(true);lyr_Zona_intangibles_4.setVisible(true);lyr_rea_influencia_directa_5.setVisible(true);lyr_rea_influencia_indirecta_6.setVisible(true);lyr_Franja_diversidad_vida_7.setVisible(true);lyr_Hidroelctricas_8.setVisible(true);lyr_Comunidades_indigenas_ctea_9.setVisible(true);lyr_Proyectos_postulados_2022_10.setVisible(true);lyr_Proyectos_postulados_2021_11.setVisible(true);lyr_Proyectos_priorizacion_2022_12.setVisible(true);lyr_Proyectos_priorizacion_2021_13.setVisible(true);
var layersList = [baseLayer,lyr_Minera_0,lyr_Petroleo_1,lyr_Territorio_indigena_2,lyr_snap_ctea_3,lyr_Zona_intangibles_4,lyr_rea_influencia_directa_5,lyr_rea_influencia_indirecta_6,lyr_Franja_diversidad_vida_7,lyr_Hidroelctricas_8,lyr_Comunidades_indigenas_ctea_9,lyr_Proyectos_postulados_2022_10,lyr_Proyectos_postulados_2021_11,lyr_Proyectos_priorizacion_2022_12,lyr_Proyectos_priorizacion_2021_13];
lyr_Minera_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nombre': 'nombre', 'cia': 'cia', 'situacion': 'situacion', 'tipo_miner': 'tipo_miner', 'area_sig_h': 'area_sig_h', 'leyenda': 'leyenda', });
lyr_Petroleo_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'nombre': 'nombre', 'cia': 'cia', 'situacion': 'situacion', 'area_sig_h': 'area_sig_h', 'leyenda': 'leyenda', });
lyr_Territorio_indigena_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'nombre': 'nombre', 'etnias': 'etnias', 'area_sig_h': 'area_sig_h', 'leyenda': 'leyenda', });
lyr_snap_ctea_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nam': 'nam', 'subap': 'subap', 'edel': 'edel', 'are': 'are', 'Shape_Area': 'Shape_Area', });
lyr_Zona_intangibles_4.set('fieldAliases', {'cod_in_mae': 'cod_in_mae', 'nombre': 'nombre', 'doc_oficia': 'doc_oficia', 'arl': 'arl', });
lyr_rea_influencia_directa_5.set('fieldAliases', {'DPA_PARROQ': 'DPA_PARROQ', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'NAM_PROYEC': 'NAM_PROYEC', 'NAM_EMPRES': 'NAM_EMPRES', 'ACTIVIDAD': 'ACTIVIDAD', 'LICENCIA': 'LICENCIA', 'AREA_INFLU': 'AREA_INFLU', 'AREA_HA': 'AREA_HA', 'OBSERVACIO': 'OBSERVACIO', });
lyr_rea_influencia_indirecta_6.set('fieldAliases', {'DPA_PARROQ': 'DPA_PARROQ', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'NAM_PROYEC': 'NAM_PROYEC', 'NAM_EMPRES': 'NAM_EMPRES', 'ACTIVIDAD': 'ACTIVIDAD', 'LICENCIA': 'LICENCIA', 'AREA_INFLU': 'AREA_INFLU', 'AREA_HA': 'AREA_HA', 'OBSERVACIO': 'OBSERVACIO', });
lyr_Franja_diversidad_vida_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'area': 'area', 'Shape_Leng': 'Shape_Leng', 'area_1': 'area_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Hidroelctricas_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fonte': 'fonte', 'leyenda': 'leyenda', 'Empresa': 'Empresa', 'Nombre': 'Nombre', });
lyr_Comunidades_indigenas_ctea_9.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Punto': 'Punto', 'comunidad': 'comunidad', 'este': 'este', 'norte': 'norte', 'OBJECTID': 'OBJECTID', 'FID_CN_Mer': 'FID_CN_Mer', 'VALIDADO': 'VALIDADO', 'Pueblo_com': 'Pueblo_com', 'Organizaci': 'Organizaci', 'Total_de_h': 'Total_de_h', 'Población': 'Población', 'Referencia': 'Referencia', 'Altitud': 'Altitud', 'DESASTRES': 'DESASTRES', 'MEDIO_DE_C': 'MEDIO_DE_C', 'ACCESIBILI': 'ACCESIBILI', 'X__z18': 'X__z18', 'Y__z18': 'Y__z18', 'OBSERVACIO': 'OBSERVACIO', 'Fecha_de_v': 'Fecha_de_v', 'DPA_PARROQ': 'DPA_PARROQ', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'NACIONALID': 'NACIONALID', });
lyr_Proyectos_postulados_2022_10.set('fieldAliases', {'PROYECTO': 'PROYECTO', 'AREA_INFLU': 'AREA_INFLU', 'PROVINCIA': 'PROVINCIA', 'CANTON': 'CANTON', 'PARROQUIA': 'PARROQUIA', 'X': 'X', 'Y': 'Y', });
lyr_Proyectos_postulados_2021_11.set('fieldAliases', {'PROYECTO': 'PROYECTO', 'X': 'X', 'Y': 'Y', 'AREA_INF': 'AREA_INF', 'PROVINCIA': 'PROVINCIA', 'CANTON': 'CANTON', 'PARROQUIA': 'PARROQUIA', });
lyr_Proyectos_priorizacion_2022_12.set('fieldAliases', {'PROYECTO': 'PROYECTO', 'PROVINCIA': 'PROVINCIA', 'CANTON': 'CANTON', 'PARROQUIA': 'PARROQUIA', 'X': 'X', 'Y': 'Y', 'AREA_INFLU': 'AREA_INFLU', });
lyr_Proyectos_priorizacion_2021_13.set('fieldAliases', {'PROYECTO': 'PROYECTO', 'PROVINCIA': 'PROVINCIA', 'CANTON': 'CANTON', 'PARROQUIA': 'PARROQUIA', 'X': 'X', 'Y': 'Y', 'AREA_INFLU': 'AREA_INFLU', });
lyr_Minera_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'nombre': 'TextEdit', 'cia': 'TextEdit', 'situacion': 'TextEdit', 'tipo_miner': 'TextEdit', 'area_sig_h': 'TextEdit', 'leyenda': 'TextEdit', });
lyr_Petroleo_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'nombre': 'TextEdit', 'cia': 'TextEdit', 'situacion': 'TextEdit', 'area_sig_h': 'TextEdit', 'leyenda': 'TextEdit', });
lyr_Territorio_indigena_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'nombre': 'TextEdit', 'etnias': 'TextEdit', 'area_sig_h': 'TextEdit', 'leyenda': 'TextEdit', });
lyr_snap_ctea_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'nam': 'TextEdit', 'subap': 'TextEdit', 'edel': 'TextEdit', 'are': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zona_intangibles_4.set('fieldImages', {'cod_in_mae': 'TextEdit', 'nombre': 'TextEdit', 'doc_oficia': 'TextEdit', 'arl': 'TextEdit', });
lyr_rea_influencia_directa_5.set('fieldImages', {'DPA_PARROQ': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'NAM_PROYEC': 'TextEdit', 'NAM_EMPRES': 'TextEdit', 'ACTIVIDAD': 'TextEdit', 'LICENCIA': 'TextEdit', 'AREA_INFLU': 'TextEdit', 'AREA_HA': 'TextEdit', 'OBSERVACIO': 'TextEdit', });
lyr_rea_influencia_indirecta_6.set('fieldImages', {'DPA_PARROQ': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'NAM_PROYEC': 'TextEdit', 'NAM_EMPRES': 'TextEdit', 'ACTIVIDAD': 'TextEdit', 'LICENCIA': 'TextEdit', 'AREA_INFLU': 'TextEdit', 'AREA_HA': 'TextEdit', 'OBSERVACIO': 'TextEdit', });
lyr_Franja_diversidad_vida_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'area_1': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Hidroelctricas_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'fonte': 'TextEdit', 'leyenda': 'TextEdit', 'Empresa': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Comunidades_indigenas_ctea_9.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Punto': 'TextEdit', 'comunidad': 'TextEdit', 'este': 'TextEdit', 'norte': 'TextEdit', 'OBJECTID': 'TextEdit', 'FID_CN_Mer': 'TextEdit', 'VALIDADO': 'TextEdit', 'Pueblo_com': 'TextEdit', 'Organizaci': 'TextEdit', 'Total_de_h': 'TextEdit', 'Población': 'TextEdit', 'Referencia': 'TextEdit', 'Altitud': 'TextEdit', 'DESASTRES': 'TextEdit', 'MEDIO_DE_C': 'TextEdit', 'ACCESIBILI': 'TextEdit', 'X__z18': 'TextEdit', 'Y__z18': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'Fecha_de_v': 'TextEdit', 'DPA_PARROQ': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'NACIONALID': 'TextEdit', });
lyr_Proyectos_postulados_2022_10.set('fieldImages', {'PROYECTO': 'TextEdit', 'AREA_INFLU': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CANTON': 'TextEdit', 'PARROQUIA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Proyectos_postulados_2021_11.set('fieldImages', {'PROYECTO': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'AREA_INF': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CANTON': 'TextEdit', 'PARROQUIA': 'TextEdit', });
lyr_Proyectos_priorizacion_2022_12.set('fieldImages', {'PROYECTO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CANTON': 'TextEdit', 'PARROQUIA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'AREA_INFLU': 'TextEdit', });
lyr_Proyectos_priorizacion_2021_13.set('fieldImages', {'PROYECTO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CANTON': 'TextEdit', 'PARROQUIA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'AREA_INFLU': 'TextEdit', });
lyr_Minera_0.set('fieldLabels', {'OBJECTID': 'no label', 'nombre': 'no label', 'cia': 'no label', 'situacion': 'no label', 'tipo_miner': 'no label', 'area_sig_h': 'no label', 'leyenda': 'no label', });
lyr_Petroleo_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'nombre': 'no label', 'cia': 'no label', 'situacion': 'no label', 'area_sig_h': 'no label', 'leyenda': 'no label', });
lyr_Territorio_indigena_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'nombre': 'no label', 'etnias': 'no label', 'area_sig_h': 'no label', 'leyenda': 'no label', });
lyr_snap_ctea_3.set('fieldLabels', {'OBJECTID': 'no label', 'nam': 'no label', 'subap': 'no label', 'edel': 'no label', 'are': 'no label', 'Shape_Area': 'no label', });
lyr_Zona_intangibles_4.set('fieldLabels', {'cod_in_mae': 'no label', 'nombre': 'no label', 'doc_oficia': 'no label', 'arl': 'no label', });
lyr_rea_influencia_directa_5.set('fieldLabels', {'DPA_PARROQ': 'no label', 'DPA_DESPAR': 'no label', 'DPA_CANTON': 'no label', 'DPA_DESCAN': 'no label', 'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', 'NAM_PROYEC': 'no label', 'NAM_EMPRES': 'no label', 'ACTIVIDAD': 'no label', 'LICENCIA': 'no label', 'AREA_INFLU': 'no label', 'AREA_HA': 'no label', 'OBSERVACIO': 'no label', });
lyr_rea_influencia_indirecta_6.set('fieldLabels', {'DPA_PARROQ': 'no label', 'DPA_DESPAR': 'no label', 'DPA_CANTON': 'no label', 'DPA_DESCAN': 'no label', 'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', 'NAM_PROYEC': 'no label', 'NAM_EMPRES': 'no label', 'ACTIVIDAD': 'no label', 'LICENCIA': 'no label', 'AREA_INFLU': 'no label', 'AREA_HA': 'no label', 'OBSERVACIO': 'no label', });
lyr_Franja_diversidad_vida_7.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'area': 'no label', 'Shape_Leng': 'no label', 'area_1': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Hidroelctricas_8.set('fieldLabels', {'OBJECTID': 'no label', 'fonte': 'no label', 'leyenda': 'no label', 'Empresa': 'no label', 'Nombre': 'no label', });
lyr_Comunidades_indigenas_ctea_9.set('fieldLabels', {'OBJECTID_1': 'no label', 'Punto': 'no label', 'comunidad': 'no label', 'este': 'no label', 'norte': 'no label', 'OBJECTID': 'no label', 'FID_CN_Mer': 'no label', 'VALIDADO': 'no label', 'Pueblo_com': 'no label', 'Organizaci': 'no label', 'Total_de_h': 'no label', 'Población': 'no label', 'Referencia': 'no label', 'Altitud': 'no label', 'DESASTRES': 'no label', 'MEDIO_DE_C': 'no label', 'ACCESIBILI': 'no label', 'X__z18': 'no label', 'Y__z18': 'no label', 'OBSERVACIO': 'no label', 'Fecha_de_v': 'no label', 'DPA_PARROQ': 'no label', 'DPA_DESPAR': 'no label', 'DPA_CANTON': 'no label', 'DPA_DESCAN': 'no label', 'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', 'NACIONALID': 'no label', });
lyr_Proyectos_postulados_2022_10.set('fieldLabels', {'PROYECTO': 'no label', 'AREA_INFLU': 'no label', 'PROVINCIA': 'no label', 'CANTON': 'no label', 'PARROQUIA': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Proyectos_postulados_2021_11.set('fieldLabels', {'PROYECTO': 'no label', 'AREA_INF': 'no label', 'PROVINCIA': 'no label', 'CANTON': 'no label', 'PARROQUIA': 'no label', });
lyr_Proyectos_priorizacion_2022_12.set('fieldLabels', {'PROYECTO': 'no label', 'PROVINCIA': 'no label', 'CANTON': 'no label', 'PARROQUIA': 'no label', 'X': 'no label', 'Y': 'no label', 'AREA_INFLU': 'no label', });
lyr_Proyectos_priorizacion_2021_13.set('fieldLabels', {'PROYECTO': 'no label', 'PROVINCIA': 'no label', 'CANTON': 'no label', 'PARROQUIA': 'no label', 'X': 'no label', 'Y': 'no label', 'AREA_INFLU': 'no label', });
lyr_Proyectos_priorizacion_2021_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});