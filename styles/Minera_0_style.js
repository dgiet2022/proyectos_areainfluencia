var size = 0;
var placement = 'point';

var style_Minera_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(221,203,0,1.0)', lineDash: [10,5], lineCap: 'butt', lineJoin: 'miter', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
