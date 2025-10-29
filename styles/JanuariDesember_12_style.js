var size = 0;
var placement = 'point';

var style_JanuariDesember_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("DN");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 2148.000000 && value <= 2288.444444) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2288.444444 && value <= 2428.888889) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,236,247,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2428.888889 && value <= 2569.333333) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,220,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2569.333333 && value <= 2709.777778) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(163,204,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2709.777778 && value <= 2850.222222) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(115,178,216,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2850.222222 && value <= 2990.666667) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(74,151,201,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2990.666667 && value <= 3131.111111) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(41,121,185,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3131.111111 && value <= 3271.555556) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(13,88,161,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3271.555556 && value <= 3412.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
