var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.750000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SLC_Boundary_3566_1 = new ol.format.GeoJSON();
var features_SLC_Boundary_3566_1 = format_SLC_Boundary_3566_1.readFeatures(json_SLC_Boundary_3566_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLC_Boundary_3566_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLC_Boundary_3566_1.addFeatures(features_SLC_Boundary_3566_1);
var lyr_SLC_Boundary_3566_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLC_Boundary_3566_1, 
                style: style_SLC_Boundary_3566_1,
                interactive: false,
                title: '<img src="styles/legend/SLC_Boundary_3566_1.png" /> SLC_Boundary_3566'
            });
var format_SLC_Neighborhoods_3566_2 = new ol.format.GeoJSON();
var features_SLC_Neighborhoods_3566_2 = format_SLC_Neighborhoods_3566_2.readFeatures(json_SLC_Neighborhoods_3566_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLC_Neighborhoods_3566_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLC_Neighborhoods_3566_2.addFeatures(features_SLC_Neighborhoods_3566_2);
var lyr_SLC_Neighborhoods_3566_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLC_Neighborhoods_3566_2, 
                style: style_SLC_Neighborhoods_3566_2,
                interactive: true,
                title: '<img src="styles/legend/SLC_Neighborhoods_3566_2.png" /> SLC_Neighborhoods_3566'
            });
var format_SLC_Censustract_3566_3 = new ol.format.GeoJSON();
var features_SLC_Censustract_3566_3 = format_SLC_Censustract_3566_3.readFeatures(json_SLC_Censustract_3566_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLC_Censustract_3566_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLC_Censustract_3566_3.addFeatures(features_SLC_Censustract_3566_3);
var lyr_SLC_Censustract_3566_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLC_Censustract_3566_3, 
                style: style_SLC_Censustract_3566_3,
                interactive: true,
                title: '<img src="styles/legend/SLC_Censustract_3566_3.png" /> SLC_Censustract_3566'
            });
var format_Transport_Polygons_3566_4 = new ol.format.GeoJSON();
var features_Transport_Polygons_3566_4 = format_Transport_Polygons_3566_4.readFeatures(json_Transport_Polygons_3566_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transport_Polygons_3566_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transport_Polygons_3566_4.addFeatures(features_Transport_Polygons_3566_4);
var lyr_Transport_Polygons_3566_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transport_Polygons_3566_4, 
                style: style_Transport_Polygons_3566_4,
                interactive: true,
                title: '<img src="styles/legend/Transport_Polygons_3566_4.png" /> Transport_Polygons_3566'
            });
var format_SLC_RDA_Polylines_3566_5 = new ol.format.GeoJSON();
var features_SLC_RDA_Polylines_3566_5 = format_SLC_RDA_Polylines_3566_5.readFeatures(json_SLC_RDA_Polylines_3566_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLC_RDA_Polylines_3566_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLC_RDA_Polylines_3566_5.addFeatures(features_SLC_RDA_Polylines_3566_5);
var lyr_SLC_RDA_Polylines_3566_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLC_RDA_Polylines_3566_5, 
                style: style_SLC_RDA_Polylines_3566_5,
                interactive: true,
                title: '<img src="styles/legend/SLC_RDA_Polylines_3566_5.png" /> SLC_RDA_Polylines_3566'
            });
var format_Transport_Polylines_3566_6 = new ol.format.GeoJSON();
var features_Transport_Polylines_3566_6 = format_Transport_Polylines_3566_6.readFeatures(json_Transport_Polylines_3566_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transport_Polylines_3566_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transport_Polylines_3566_6.addFeatures(features_Transport_Polylines_3566_6);
var lyr_Transport_Polylines_3566_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transport_Polylines_3566_6, 
                style: style_Transport_Polylines_3566_6,
                interactive: true,
                title: '<img src="styles/legend/Transport_Polylines_3566_6.png" /> Transport_Polylines_3566'
            });
var format_Parks_Polylines_3566_7 = new ol.format.GeoJSON();
var features_Parks_Polylines_3566_7 = format_Parks_Polylines_3566_7.readFeatures(json_Parks_Polylines_3566_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_Polylines_3566_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parks_Polylines_3566_7.addFeatures(features_Parks_Polylines_3566_7);
var lyr_Parks_Polylines_3566_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parks_Polylines_3566_7, 
                style: style_Parks_Polylines_3566_7,
                interactive: true,
                title: '<img src="styles/legend/Parks_Polylines_3566_7.png" /> Parks_Polylines_3566'
            });
var format_SLC_Development_3566_8 = new ol.format.GeoJSON();
var features_SLC_Development_3566_8 = format_SLC_Development_3566_8.readFeatures(json_SLC_Development_3566_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLC_Development_3566_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLC_Development_3566_8.addFeatures(features_SLC_Development_3566_8);
var lyr_SLC_Development_3566_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLC_Development_3566_8, 
                style: style_SLC_Development_3566_8,
                interactive: true,
                title: '<img src="styles/legend/SLC_Development_3566_8.png" /> SLC_Development_3566'
            });
var format_SLC_ADUs_9 = new ol.format.GeoJSON();
var features_SLC_ADUs_9 = format_SLC_ADUs_9.readFeatures(json_SLC_ADUs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLC_ADUs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLC_ADUs_9.addFeatures(features_SLC_ADUs_9);
var lyr_SLC_ADUs_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLC_ADUs_9, 
                style: style_SLC_ADUs_9,
                interactive: true,
                title: '<img src="styles/legend/SLC_ADUs_9.png" /> SLC_ADUs'
            });
var format_SLC_RDA_Points_3566_10 = new ol.format.GeoJSON();
var features_SLC_RDA_Points_3566_10 = format_SLC_RDA_Points_3566_10.readFeatures(json_SLC_RDA_Points_3566_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLC_RDA_Points_3566_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLC_RDA_Points_3566_10.addFeatures(features_SLC_RDA_Points_3566_10);
var lyr_SLC_RDA_Points_3566_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLC_RDA_Points_3566_10, 
                style: style_SLC_RDA_Points_3566_10,
                interactive: true,
                title: '<img src="styles/legend/SLC_RDA_Points_3566_10.png" /> SLC_RDA_Points_3566'
            });
var format_SLC_AffordableHousing_3566_11 = new ol.format.GeoJSON();
var features_SLC_AffordableHousing_3566_11 = format_SLC_AffordableHousing_3566_11.readFeatures(json_SLC_AffordableHousing_3566_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLC_AffordableHousing_3566_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLC_AffordableHousing_3566_11.addFeatures(features_SLC_AffordableHousing_3566_11);
var lyr_SLC_AffordableHousing_3566_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLC_AffordableHousing_3566_11, 
                style: style_SLC_AffordableHousing_3566_11,
                interactive: true,
                title: '<img src="styles/legend/SLC_AffordableHousing_3566_11.png" /> SLC_AffordableHousing_3566'
            });
var format_Transport_Points_3566_12 = new ol.format.GeoJSON();
var features_Transport_Points_3566_12 = format_Transport_Points_3566_12.readFeatures(json_Transport_Points_3566_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transport_Points_3566_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transport_Points_3566_12.addFeatures(features_Transport_Points_3566_12);
var lyr_Transport_Points_3566_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transport_Points_3566_12, 
                style: style_Transport_Points_3566_12,
                interactive: true,
                title: '<img src="styles/legend/Transport_Points_3566_12.png" /> Transport_Points_3566'
            });
var format_Parks_Points_3566_13 = new ol.format.GeoJSON();
var features_Parks_Points_3566_13 = format_Parks_Points_3566_13.readFeatures(json_Parks_Points_3566_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_Points_3566_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parks_Points_3566_13.addFeatures(features_Parks_Points_3566_13);
var lyr_Parks_Points_3566_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parks_Points_3566_13, 
                style: style_Parks_Points_3566_13,
                interactive: true,
                title: '<img src="styles/legend/Parks_Points_3566_13.png" /> Parks_Points_3566'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SLC_Boundary_3566_1.setVisible(true);lyr_SLC_Neighborhoods_3566_2.setVisible(true);lyr_SLC_Censustract_3566_3.setVisible(true);lyr_Transport_Polygons_3566_4.setVisible(true);lyr_SLC_RDA_Polylines_3566_5.setVisible(true);lyr_Transport_Polylines_3566_6.setVisible(true);lyr_Parks_Polylines_3566_7.setVisible(true);lyr_SLC_Development_3566_8.setVisible(true);lyr_SLC_ADUs_9.setVisible(true);lyr_SLC_RDA_Points_3566_10.setVisible(true);lyr_SLC_AffordableHousing_3566_11.setVisible(true);lyr_Transport_Points_3566_12.setVisible(true);lyr_Parks_Points_3566_13.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SLC_Boundary_3566_1,lyr_SLC_Neighborhoods_3566_2,lyr_SLC_Censustract_3566_3,lyr_Transport_Polygons_3566_4,lyr_SLC_RDA_Polylines_3566_5,lyr_Transport_Polylines_3566_6,lyr_Parks_Polylines_3566_7,lyr_SLC_Development_3566_8,lyr_SLC_ADUs_9,lyr_SLC_RDA_Points_3566_10,lyr_SLC_AffordableHousing_3566_11,lyr_Transport_Points_3566_12,lyr_Parks_Points_3566_13];
lyr_SLC_Boundary_3566_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SLC_Neighborhoods_3566_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA_ID': 'AREA_ID', 'COMCOUNCIL': 'COMCOUNCIL', 'COMCOUNC_1': 'COMCOUNC_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SLC_Censustract_3566_3.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Tract_Name': 'Tract_Name', 'GEOID_Tru': 'GEOID_Tru', 'NeighborHd': 'NeighborHd', 'Per_Renter': 'Per_Renter', 'Per_Owner': 'Per_Owner', 'Vacancy_Rt': 'Vacancy_Rt', 'AvgHH_Size': 'AvgHH_Size', 'HH_Overcwd': 'HH_Overcwd', 'PerIncRent': 'PerIncRent', 'PerIncMort': 'PerIncMort', 'HH>30per': 'HH>30per', 'HH>50per': 'HH>50per', 'HH_2006_10': 'HH_2006_10', 'HH_2015_19': 'HH_2015_19', 'PerChangHH': 'PerChangHH', 'PerAgricul': 'PerAgricul', 'PerMining': 'PerMining', 'PerConstru': 'PerConstru', 'PerManufac': 'PerManufac', 'PerWholesa': 'PerWholesa', 'PerRetail': 'PerRetail', 'PerTrans': 'PerTrans', 'PerUtility': 'PerUtility', 'PerInform': 'PerInform', 'PerFinance': 'PerFinance', 'PerRealEst': 'PerRealEst', 'PerSciTech': 'PerSciTech', 'PerMgmt': 'PerMgmt', 'PerAdminis': 'PerAdminis', 'PerEducat': 'PerEducat', 'PerHealth': 'PerHealth', 'PerArtEnt': 'PerArtEnt', 'PerAccomod': 'PerAccomod', 'PerOthXPA': 'PerOthXPA', 'PerPubAdm': 'PerPubAdm', });
lyr_Transport_Polygons_3566_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ProjName': 'ProjName', 'Add1': 'Add1', 'Add2': 'Add2', 'State': 'State', 'County': 'County', 'Category': 'Category', 'CompYR': 'CompYR', });
lyr_SLC_RDA_Polylines_3566_5.set('fieldAliases', {'Proj_Name': 'Proj_Name', 'Address': 'Address', 'State': 'State', 'County': 'County', 'Proj_Area': 'Proj_Area', 'No_Units': 'No_Units', 'Mkt_Rt_Uni': 'Mkt_Rt_Uni', 'AffordUnit': 'AffordUnit', 'Type': 'Type', 'Status': 'Status', });
lyr_Transport_Polylines_3566_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'ProjName': 'ProjName', 'Add1': 'Add1', 'Add2': 'Add2', 'State': 'State', 'County': 'County', 'Category': 'Category', 'CompYR': 'CompYR', });
lyr_Parks_Polylines_3566_7.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_SLC_Development_3566_8.set('fieldAliases', {'Project_Na': 'Project_Na', '_Units': '_Units', 'Developer_': 'Developer_', 'Address_Ne': 'Address_Ne', 'Status': 'Status', 'State': 'State', 'County': 'County', 'SymbolID': 'SymbolID', });
lyr_SLC_ADUs_9.set('fieldAliases', {'Address': 'Address', 'Type': 'Type', 'Process': 'Process', 'Status': 'Status', 'District': 'District', 'Year_Appli': 'Year_Appli', 'County': 'County', 'State': 'State', 'SymbolID': 'SymbolID', });
lyr_SLC_RDA_Points_3566_10.set('fieldAliases', {'Proj_Name': 'Proj_Name', 'Address': 'Address', 'State': 'State', 'County': 'County', 'Proj__Area': 'Proj__Area', 'No_Units': 'No_Units', 'Mkt_Rt_Uni': 'Mkt_Rt_Uni', 'AffordUnit': 'AffordUnit', 'Type': 'Type', 'Status': 'Status', 'SymbolID': 'SymbolID', });
lyr_SLC_AffordableHousing_3566_11.set('fieldAliases', {'Name': 'Name', 'Street': 'Street', 'Zip': 'Zip', 'State': 'State', 'County': 'County', 'Neighborho': 'Neighborho', 'Council_Di': 'Council_Di', 'Total_Unit': 'Total_Unit', 'Market_Rat': 'Market_Rat', 'Affordable': 'Affordable', 'Status': 'Status', 'Deed_Restr': 'Deed_Restr', 'SymbolID': 'SymbolID', });
lyr_Transport_Points_3566_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ProjName': 'ProjName', 'Add1': 'Add1', 'Add2': 'Add2', 'State': 'State', 'County': 'County', 'Category': 'Category', 'CompYR': 'CompYR', });
lyr_Parks_Points_3566_13.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'Comments': 'Comments', });
lyr_SLC_Boundary_3566_1.set('fieldImages', {'OBJECTID': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SLC_Neighborhoods_3566_2.set('fieldImages', {'OBJECTID': 'Range', 'AREA_ID': 'Range', 'COMCOUNCIL': 'TextEdit', 'COMCOUNC_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SLC_Censustract_3566_3.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'Tract_Name': 'TextEdit', 'GEOID_Tru': 'TextEdit', 'NeighborHd': 'TextEdit', 'Per_Renter': 'TextEdit', 'Per_Owner': 'TextEdit', 'Vacancy_Rt': 'TextEdit', 'AvgHH_Size': 'TextEdit', 'HH_Overcwd': 'TextEdit', 'PerIncRent': 'TextEdit', 'PerIncMort': 'TextEdit', 'HH>30per': 'Range', 'HH>50per': 'Range', 'HH_2006_10': 'Range', 'HH_2015_19': 'Range', 'PerChangHH': 'TextEdit', 'PerAgricul': 'TextEdit', 'PerMining': 'TextEdit', 'PerConstru': 'TextEdit', 'PerManufac': 'TextEdit', 'PerWholesa': 'TextEdit', 'PerRetail': 'TextEdit', 'PerTrans': 'TextEdit', 'PerUtility': 'TextEdit', 'PerInform': 'TextEdit', 'PerFinance': 'TextEdit', 'PerRealEst': 'TextEdit', 'PerSciTech': 'TextEdit', 'PerMgmt': 'TextEdit', 'PerAdminis': 'TextEdit', 'PerEducat': 'TextEdit', 'PerHealth': 'TextEdit', 'PerArtEnt': 'TextEdit', 'PerAccomod': 'TextEdit', 'PerOthXPA': 'TextEdit', 'PerPubAdm': 'TextEdit', });
lyr_Transport_Polygons_3566_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ProjName': 'TextEdit', 'Add1': 'TextEdit', 'Add2': 'TextEdit', 'State': 'TextEdit', 'County': 'TextEdit', 'Category': 'TextEdit', 'CompYR': 'TextEdit', });
lyr_SLC_RDA_Polylines_3566_5.set('fieldImages', {'Proj_Name': 'TextEdit', 'Address': 'TextEdit', 'State': 'TextEdit', 'County': 'TextEdit', 'Proj_Area': 'TextEdit', 'No_Units': 'TextEdit', 'Mkt_Rt_Uni': 'TextEdit', 'AffordUnit': 'TextEdit', 'Type': 'TextEdit', 'Status': 'TextEdit', });
lyr_Transport_Polylines_3566_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'ProjName': 'TextEdit', 'Add1': 'TextEdit', 'Add2': 'TextEdit', 'State': 'TextEdit', 'County': 'TextEdit', 'Category': 'TextEdit', 'CompYR': 'TextEdit', });
lyr_Parks_Polylines_3566_7.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_SLC_Development_3566_8.set('fieldImages', {'Project_Na': 'TextEdit', '_Units': 'TextEdit', 'Developer_': 'TextEdit', 'Address_Ne': 'TextEdit', 'Status': 'TextEdit', 'State': 'TextEdit', 'County': 'TextEdit', 'SymbolID': 'TextEdit', });
lyr_SLC_ADUs_9.set('fieldImages', {'Address': 'TextEdit', 'Type': 'TextEdit', 'Process': 'TextEdit', 'Status': 'TextEdit', 'District': 'TextEdit', 'Year_Appli': 'TextEdit', 'County': 'TextEdit', 'State': 'TextEdit', 'SymbolID': 'TextEdit', });
lyr_SLC_RDA_Points_3566_10.set('fieldImages', {'Proj_Name': 'TextEdit', 'Address': 'TextEdit', 'State': 'TextEdit', 'County': 'TextEdit', 'Proj__Area': 'TextEdit', 'No_Units': 'TextEdit', 'Mkt_Rt_Uni': 'TextEdit', 'AffordUnit': 'TextEdit', 'Type': 'TextEdit', 'Status': 'TextEdit', 'SymbolID': 'TextEdit', });
lyr_SLC_AffordableHousing_3566_11.set('fieldImages', {'Name': 'TextEdit', 'Street': 'TextEdit', 'Zip': 'TextEdit', 'State': 'TextEdit', 'County': 'TextEdit', 'Neighborho': 'TextEdit', 'Council_Di': 'TextEdit', 'Total_Unit': 'TextEdit', 'Market_Rat': 'TextEdit', 'Affordable': 'TextEdit', 'Status': 'TextEdit', 'Deed_Restr': 'TextEdit', 'SymbolID': 'TextEdit', });
lyr_Transport_Points_3566_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'ProjName': 'TextEdit', 'Add1': 'TextEdit', 'Add2': 'TextEdit', 'State': 'TextEdit', 'County': 'TextEdit', 'Category': 'TextEdit', 'CompYR': 'TextEdit', });
lyr_Parks_Points_3566_13.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'Comments': 'TextEdit', });
lyr_SLC_Boundary_3566_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SLC_Neighborhoods_3566_2.set('fieldLabels', {'OBJECTID': 'no label', 'AREA_ID': 'no label', 'COMCOUNCIL': 'inline label', 'COMCOUNC_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SLC_Censustract_3566_3.set('fieldLabels', {'STATEFP': 'inline label', 'COUNTYFP': 'inline label', 'TRACTCE': 'inline label', 'AFFGEOID': 'inline label', 'GEOID': 'inline label', 'NAME': 'inline label', 'LSAD': 'inline label', 'ALAND': 'inline label', 'AWATER': 'inline label', 'Tract_Name': 'inline label', 'GEOID_Tru': 'inline label', 'NeighborHd': 'inline label', 'Per_Renter': 'inline label', 'Per_Owner': 'inline label', 'Vacancy_Rt': 'inline label', 'AvgHH_Size': 'inline label', 'HH_Overcwd': 'inline label', 'PerIncRent': 'inline label', 'PerIncMort': 'inline label', 'HH>30per': 'inline label', 'HH>50per': 'inline label', 'HH_2006_10': 'inline label', 'HH_2015_19': 'inline label', 'PerChangHH': 'inline label', 'PerAgricul': 'inline label', 'PerMining': 'inline label', 'PerConstru': 'inline label', 'PerManufac': 'inline label', 'PerWholesa': 'inline label', 'PerRetail': 'inline label', 'PerTrans': 'inline label', 'PerUtility': 'inline label', 'PerInform': 'inline label', 'PerFinance': 'inline label', 'PerRealEst': 'inline label', 'PerSciTech': 'inline label', 'PerMgmt': 'inline label', 'PerAdminis': 'inline label', 'PerEducat': 'inline label', 'PerHealth': 'inline label', 'PerArtEnt': 'inline label', 'PerAccomod': 'inline label', 'PerOthXPA': 'inline label', 'PerPubAdm': 'inline label', });
lyr_Transport_Polygons_3566_4.set('fieldLabels', {'OBJECTID': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', 'ProjName': 'inline label', 'Add1': 'inline label', 'Add2': 'inline label', 'State': 'inline label', 'County': 'inline label', 'Category': 'inline label', 'CompYR': 'inline label', });
lyr_SLC_RDA_Polylines_3566_5.set('fieldLabels', {'Proj_Name': 'inline label', 'Address': 'inline label', 'State': 'inline label', 'County': 'inline label', 'Proj_Area': 'inline label', 'No_Units': 'inline label', 'Mkt_Rt_Uni': 'inline label', 'AffordUnit': 'inline label', 'Type': 'inline label', 'Status': 'inline label', });
lyr_Transport_Polylines_3566_6.set('fieldLabels', {'OBJECTID': 'inline label', 'SHAPE_Leng': 'inline label', 'ProjName': 'inline label', 'Add1': 'inline label', 'Add2': 'inline label', 'State': 'inline label', 'County': 'inline label', 'Category': 'inline label', 'CompYR': 'inline label', });
lyr_Parks_Polylines_3566_7.set('fieldLabels', {'Name': 'inline label', 'FolderPath': 'inline label', 'SymbolID': 'inline label', 'AltMode': 'inline label', 'Base': 'inline label', 'Clamped': 'inline label', 'Extruded': 'inline label', 'Snippet': 'inline label', 'PopupInfo': 'inline label', 'Shape_Leng': 'inline label', });
lyr_SLC_Development_3566_8.set('fieldLabels', {'Project_Na': 'inline label', '_Units': 'inline label', 'Developer_': 'inline label', 'Address_Ne': 'inline label', 'Status': 'inline label', 'State': 'inline label', 'County': 'inline label', 'SymbolID': 'inline label', });
lyr_SLC_ADUs_9.set('fieldLabels', {'Address': 'inline label', 'Type': 'inline label', 'Process': 'inline label', 'Status': 'inline label', 'District': 'inline label', 'Year_Appli': 'inline label', 'County': 'inline label', 'State': 'inline label', 'SymbolID': 'inline label', });
lyr_SLC_RDA_Points_3566_10.set('fieldLabels', {'Proj_Name': 'inline label', 'Address': 'inline label', 'State': 'inline label', 'County': 'inline label', 'Proj__Area': 'inline label', 'No_Units': 'inline label', 'Mkt_Rt_Uni': 'inline label', 'AffordUnit': 'inline label', 'Type': 'inline label', 'Status': 'inline label', 'SymbolID': 'inline label', });
lyr_SLC_AffordableHousing_3566_11.set('fieldLabels', {'Name': 'inline label', 'Street': 'inline label', 'Zip': 'inline label', 'State': 'inline label', 'County': 'inline label', 'Neighborho': 'inline label', 'Council_Di': 'inline label', 'Total_Unit': 'inline label', 'Market_Rat': 'inline label', 'Affordable': 'inline label', 'Status': 'inline label', 'Deed_Restr': 'inline label', 'SymbolID': 'inline label', });
lyr_Transport_Points_3566_12.set('fieldLabels', {'OBJECTID': 'inline label', 'ProjName': 'inline label', 'Add1': 'inline label', 'Add2': 'inline label', 'State': 'inline label', 'County': 'inline label', 'Category': 'inline label', 'CompYR': 'inline label', });
lyr_Parks_Points_3566_13.set('fieldLabels', {'Name': 'inline label', 'FolderPath': 'inline label', 'Comments': 'inline label', });
lyr_Parks_Points_3566_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});