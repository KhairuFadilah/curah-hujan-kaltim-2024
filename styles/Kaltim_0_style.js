var size = 0;
var placement = 'point';
function categories_Kaltim_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Berau':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(212,225,67,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kalimantan Timur':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,159,46,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kota Balikpapan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(116,231,34,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kota Bontang':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(77,189,202,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kota Samarinda':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(173,91,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kutai Barat':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(72,127,210,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kutai Kartanegara':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(117,104,234,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kutai Timur':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(212,30,194,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mahakam Ulu':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,125,117,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Paser':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(67,233,164,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Penajam Paser Utara':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(217,86,138,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Kaltim_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("namobj");
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
    
    var style = categories_Kaltim_0(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
