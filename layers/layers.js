ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:23890").setExtent([110.986146, -3.875141, 124.034949, 3.005137]);
var wms_layers = [];

var format_Januari_0 = new ol.format.GeoJSON();
var features_Januari_0 = format_Januari_0.readFeatures(json_Januari_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Januari_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Januari_0.addFeatures(features_Januari_0);
var lyr_Januari_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Januari_0, 
                style: style_Januari_0,
                popuplayertitle: 'Januari',
                interactive: false,
    title: 'Januari<br />\
    <img src="styles/legend/Januari_0_0.png" /> 133 - 161<br />\
    <img src="styles/legend/Januari_0_1.png" /> 161 - 178<br />\
    <img src="styles/legend/Januari_0_2.png" /> 178 - 195<br />\
    <img src="styles/legend/Januari_0_3.png" /> 195 - 211<br />\
    <img src="styles/legend/Januari_0_4.png" /> 211 - 230<br />\
    <img src="styles/legend/Januari_0_5.png" /> 230 - 248<br />\
    <img src="styles/legend/Januari_0_6.png" /> 248 - 262<br />\
    <img src="styles/legend/Januari_0_7.png" /> 262 - 277<br />\
    <img src="styles/legend/Januari_0_8.png" /> 277 - 323<br />' });
var format_Februari_1 = new ol.format.GeoJSON();
var features_Februari_1 = format_Februari_1.readFeatures(json_Februari_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Februari_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Februari_1.addFeatures(features_Februari_1);
var lyr_Februari_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Februari_1, 
                style: style_Februari_1,
                popuplayertitle: 'Februari',
                interactive: false,
    title: 'Februari<br />\
    <img src="styles/legend/Februari_1_0.png" /> 62 - 92<br />\
    <img src="styles/legend/Februari_1_1.png" /> 92 - 110<br />\
    <img src="styles/legend/Februari_1_2.png" /> 110 - 129<br />\
    <img src="styles/legend/Februari_1_3.png" /> 129 - 147<br />\
    <img src="styles/legend/Februari_1_4.png" /> 147 - 170<br />\
    <img src="styles/legend/Februari_1_5.png" /> 170 - 187<br />\
    <img src="styles/legend/Februari_1_6.png" /> 187 - 205<br />\
    <img src="styles/legend/Februari_1_7.png" /> 205 - 223<br />\
    <img src="styles/legend/Februari_1_8.png" /> 223 - 268<br />' });
var format_Maret_2 = new ol.format.GeoJSON();
var features_Maret_2 = format_Maret_2.readFeatures(json_Maret_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Maret_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maret_2.addFeatures(features_Maret_2);
var lyr_Maret_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maret_2, 
                style: style_Maret_2,
                popuplayertitle: 'Maret',
                interactive: false,
    title: 'Maret<br />\
    <img src="styles/legend/Maret_2_0.png" /> 90 - 134<br />\
    <img src="styles/legend/Maret_2_1.png" /> 134 - 164<br />\
    <img src="styles/legend/Maret_2_2.png" /> 164 - 196<br />\
    <img src="styles/legend/Maret_2_3.png" /> 196 - 236<br />\
    <img src="styles/legend/Maret_2_4.png" /> 236 - 272<br />\
    <img src="styles/legend/Maret_2_5.png" /> 272 - 296<br />\
    <img src="styles/legend/Maret_2_6.png" /> 296 - 319<br />\
    <img src="styles/legend/Maret_2_7.png" /> 319 - 345<br />\
    <img src="styles/legend/Maret_2_8.png" /> 345 - 398<br />' });
var format_April_3 = new ol.format.GeoJSON();
var features_April_3 = format_April_3.readFeatures(json_April_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_April_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_April_3.addFeatures(features_April_3);
var lyr_April_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_April_3, 
                style: style_April_3,
                popuplayertitle: 'April',
                interactive: false,
    title: 'April<br />\
    <img src="styles/legend/April_3_0.png" /> 77 - 125<br />\
    <img src="styles/legend/April_3_1.png" /> 125 - 141<br />\
    <img src="styles/legend/April_3_2.png" /> 141 - 152<br />\
    <img src="styles/legend/April_3_3.png" /> 152 - 161<br />\
    <img src="styles/legend/April_3_4.png" /> 161 - 170<br />\
    <img src="styles/legend/April_3_5.png" /> 170 - 179<br />\
    <img src="styles/legend/April_3_6.png" /> 179 - 188<br />\
    <img src="styles/legend/April_3_7.png" /> 188 - 199<br />\
    <img src="styles/legend/April_3_8.png" /> 199 - 233<br />' });
var format_Mei_4 = new ol.format.GeoJSON();
var features_Mei_4 = format_Mei_4.readFeatures(json_Mei_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Mei_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mei_4.addFeatures(features_Mei_4);
var lyr_Mei_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mei_4, 
                style: style_Mei_4,
                popuplayertitle: 'Mei',
                interactive: false,
    title: 'Mei<br />\
    <img src="styles/legend/Mei_4_0.png" /> 227 - 282<br />\
    <img src="styles/legend/Mei_4_1.png" /> 282 - 292<br />\
    <img src="styles/legend/Mei_4_2.png" /> 292 - 302<br />\
    <img src="styles/legend/Mei_4_3.png" /> 302 - 312<br />\
    <img src="styles/legend/Mei_4_4.png" /> 312 - 320<br />\
    <img src="styles/legend/Mei_4_5.png" /> 320 - 329<br />\
    <img src="styles/legend/Mei_4_6.png" /> 329 - 342<br />\
    <img src="styles/legend/Mei_4_7.png" /> 342 - 356<br />\
    <img src="styles/legend/Mei_4_8.png" /> 356 - 379<br />' });
var format_Juni_5 = new ol.format.GeoJSON();
var features_Juni_5 = format_Juni_5.readFeatures(json_Juni_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Juni_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Juni_5.addFeatures(features_Juni_5);
var lyr_Juni_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Juni_5, 
                style: style_Juni_5,
                popuplayertitle: 'Juni',
                interactive: false,
    title: 'Juni<br />\
    <img src="styles/legend/Juni_5_0.png" /> 172 - 199<br />\
    <img src="styles/legend/Juni_5_1.png" /> 199 - 210<br />\
    <img src="styles/legend/Juni_5_2.png" /> 210 - 219<br />\
    <img src="styles/legend/Juni_5_3.png" /> 219 - 229.8<br />\
    <img src="styles/legend/Juni_5_4.png" /> 229.8 - 240<br />\
    <img src="styles/legend/Juni_5_5.png" /> 240 - 252<br />\
    <img src="styles/legend/Juni_5_6.png" /> 252 - 266<br />\
    <img src="styles/legend/Juni_5_7.png" /> 266 - 296<br />\
    <img src="styles/legend/Juni_5_8.png" /> 296 - 367<br />' });
var format_Juli_6 = new ol.format.GeoJSON();
var features_Juli_6 = format_Juli_6.readFeatures(json_Juli_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Juli_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Juli_6.addFeatures(features_Juli_6);
var lyr_Juli_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Juli_6, 
                style: style_Juli_6,
                popuplayertitle: 'Juli',
                interactive: false,
    title: 'Juli<br />\
    <img src="styles/legend/Juli_6_0.png" /> 63 - 97<br />\
    <img src="styles/legend/Juli_6_1.png" /> 97 - 130<br />\
    <img src="styles/legend/Juli_6_2.png" /> 130 - 138<br />\
    <img src="styles/legend/Juli_6_3.png" /> 138 - 144<br />\
    <img src="styles/legend/Juli_6_4.png" /> 144 - 150<br />\
    <img src="styles/legend/Juli_6_5.png" /> 150 - 157<br />\
    <img src="styles/legend/Juli_6_6.png" /> 157 - 168<br />\
    <img src="styles/legend/Juli_6_7.png" /> 168 - 180<br />\
    <img src="styles/legend/Juli_6_8.png" /> 180 - 196<br />' });
var format_Agustus_7 = new ol.format.GeoJSON();
var features_Agustus_7 = format_Agustus_7.readFeatures(json_Agustus_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Agustus_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agustus_7.addFeatures(features_Agustus_7);
var lyr_Agustus_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agustus_7, 
                style: style_Agustus_7,
                popuplayertitle: 'Agustus',
                interactive: false,
    title: 'Agustus<br />\
    <img src="styles/legend/Agustus_7_0.png" /> 54 - 135<br />\
    <img src="styles/legend/Agustus_7_1.png" /> 135 - 183<br />\
    <img src="styles/legend/Agustus_7_2.png" /> 183 - 216<br />\
    <img src="styles/legend/Agustus_7_3.png" /> 216 - 249<br />\
    <img src="styles/legend/Agustus_7_4.png" /> 249 - 292<br />\
    <img src="styles/legend/Agustus_7_5.png" /> 292 - 344<br />\
    <img src="styles/legend/Agustus_7_6.png" /> 344 - 443<br />\
    <img src="styles/legend/Agustus_7_7.png" /> 443 - 555<br />\
    <img src="styles/legend/Agustus_7_8.png" /> 555 - 732<br />' });
var format_September_8 = new ol.format.GeoJSON();
var features_September_8 = format_September_8.readFeatures(json_September_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_September_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_September_8.addFeatures(features_September_8);
var lyr_September_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_September_8, 
                style: style_September_8,
                popuplayertitle: 'September',
                interactive: false,
    title: 'September<br />\
    <img src="styles/legend/September_8_0.png" /> 128 - 197<br />\
    <img src="styles/legend/September_8_1.png" /> 197 - 236<br />\
    <img src="styles/legend/September_8_2.png" /> 236 - 255<br />\
    <img src="styles/legend/September_8_3.png" /> 255 - 271<br />\
    <img src="styles/legend/September_8_4.png" /> 271 - 285<br />\
    <img src="styles/legend/September_8_5.png" /> 285 - 300<br />\
    <img src="styles/legend/September_8_6.png" /> 300 - 316<br />\
    <img src="styles/legend/September_8_7.png" /> 316 - 333<br />\
    <img src="styles/legend/September_8_8.png" /> 333 - 378<br />' });
var format_Oktober_9 = new ol.format.GeoJSON();
var features_Oktober_9 = format_Oktober_9.readFeatures(json_Oktober_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Oktober_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oktober_9.addFeatures(features_Oktober_9);
var lyr_Oktober_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oktober_9, 
                style: style_Oktober_9,
                popuplayertitle: 'Oktober',
                interactive: false,
    title: 'Oktober<br />\
    <img src="styles/legend/Oktober_9_0.png" /> 156 - 200<br />\
    <img src="styles/legend/Oktober_9_1.png" /> 200 - 214<br />\
    <img src="styles/legend/Oktober_9_2.png" /> 214 - 226<br />\
    <img src="styles/legend/Oktober_9_3.png" /> 226 - 241<br />\
    <img src="styles/legend/Oktober_9_4.png" /> 241 - 256<br />\
    <img src="styles/legend/Oktober_9_5.png" /> 256 - 269<br />\
    <img src="styles/legend/Oktober_9_6.png" /> 269 - 284<br />\
    <img src="styles/legend/Oktober_9_7.png" /> 284 - 299<br />\
    <img src="styles/legend/Oktober_9_8.png" /> 299 - 325<br />' });
var format_November_10 = new ol.format.GeoJSON();
var features_November_10 = format_November_10.readFeatures(json_November_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_November_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_November_10.addFeatures(features_November_10);
var lyr_November_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_November_10, 
                style: style_November_10,
                popuplayertitle: 'November',
                interactive: false,
    title: 'November<br />\
    <img src="styles/legend/November_10_0.png" /> 137 - 157<br />\
    <img src="styles/legend/November_10_1.png" /> 157 - 168<br />\
    <img src="styles/legend/November_10_2.png" /> 168 - 180.7<br />\
    <img src="styles/legend/November_10_3.png" /> 180.7 - 190<br />\
    <img src="styles/legend/November_10_4.png" /> 190 - 200<br />\
    <img src="styles/legend/November_10_5.png" /> 200 - 211<br />\
    <img src="styles/legend/November_10_6.png" /> 211 - 220<br />\
    <img src="styles/legend/November_10_7.png" /> 220 - 230<br />\
    <img src="styles/legend/November_10_8.png" /> 230 - 268<br />' });
var format_Desember_11 = new ol.format.GeoJSON();
var features_Desember_11 = format_Desember_11.readFeatures(json_Desember_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Desember_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desember_11.addFeatures(features_Desember_11);
var lyr_Desember_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desember_11, 
                style: style_Desember_11,
                popuplayertitle: 'Desember',
                interactive: false,
    title: 'Desember<br />\
    <img src="styles/legend/Desember_11_0.png" /> 228 - 239<br />\
    <img src="styles/legend/Desember_11_1.png" /> 239 - 250<br />\
    <img src="styles/legend/Desember_11_2.png" /> 250 - 261<br />\
    <img src="styles/legend/Desember_11_3.png" /> 261 - 272<br />\
    <img src="styles/legend/Desember_11_4.png" /> 272 - 284<br />\
    <img src="styles/legend/Desember_11_5.png" /> 284 - 295<br />\
    <img src="styles/legend/Desember_11_6.png" /> 295 - 306<br />\
    <img src="styles/legend/Desember_11_7.png" /> 306 - 317<br />\
    <img src="styles/legend/Desember_11_8.png" /> 317 - 328<br />' });
var format_JanuariDesember_12 = new ol.format.GeoJSON();
var features_JanuariDesember_12 = format_JanuariDesember_12.readFeatures(json_JanuariDesember_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_JanuariDesember_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JanuariDesember_12.addFeatures(features_JanuariDesember_12);
var lyr_JanuariDesember_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JanuariDesember_12, 
                style: style_JanuariDesember_12,
                popuplayertitle: 'Januari-Desember',
                interactive: false,
    title: 'Januari-Desember<br />\
    <img src="styles/legend/JanuariDesember_12_0.png" /> 2148 - 2288<br />\
    <img src="styles/legend/JanuariDesember_12_1.png" /> 2288 - 2429<br />\
    <img src="styles/legend/JanuariDesember_12_2.png" /> 2429 - 2569<br />\
    <img src="styles/legend/JanuariDesember_12_3.png" /> 2569 - 2710<br />\
    <img src="styles/legend/JanuariDesember_12_4.png" /> 2710 - 2850<br />\
    <img src="styles/legend/JanuariDesember_12_5.png" /> 2850 - 2991<br />\
    <img src="styles/legend/JanuariDesember_12_6.png" /> 2991 - 3131<br />\
    <img src="styles/legend/JanuariDesember_12_7.png" /> 3131 - 3272<br />\
    <img src="styles/legend/JanuariDesember_12_8.png" /> 3272 - 3412<br />' });
var format_ContourJanuari_13 = new ol.format.GeoJSON();
var features_ContourJanuari_13 = format_ContourJanuari_13.readFeatures(json_ContourJanuari_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourJanuari_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourJanuari_13.addFeatures(features_ContourJanuari_13);
var lyr_ContourJanuari_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourJanuari_13, 
                style: style_ContourJanuari_13,
                popuplayertitle: 'Contour-Januari',
                interactive: false,
                title: '<img src="styles/legend/ContourJanuari_13.png" /> Contour-Januari'
            });
var format_ContourFebruari_14 = new ol.format.GeoJSON();
var features_ContourFebruari_14 = format_ContourFebruari_14.readFeatures(json_ContourFebruari_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourFebruari_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourFebruari_14.addFeatures(features_ContourFebruari_14);
var lyr_ContourFebruari_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourFebruari_14, 
                style: style_ContourFebruari_14,
                popuplayertitle: 'Contour-Februari',
                interactive: false,
                title: '<img src="styles/legend/ContourFebruari_14.png" /> Contour-Februari'
            });
var format_ContourMaret_15 = new ol.format.GeoJSON();
var features_ContourMaret_15 = format_ContourMaret_15.readFeatures(json_ContourMaret_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourMaret_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourMaret_15.addFeatures(features_ContourMaret_15);
var lyr_ContourMaret_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourMaret_15, 
                style: style_ContourMaret_15,
                popuplayertitle: 'Contour-Maret',
                interactive: false,
                title: '<img src="styles/legend/ContourMaret_15.png" /> Contour-Maret'
            });
var format_ContourApril_16 = new ol.format.GeoJSON();
var features_ContourApril_16 = format_ContourApril_16.readFeatures(json_ContourApril_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourApril_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourApril_16.addFeatures(features_ContourApril_16);
var lyr_ContourApril_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourApril_16, 
                style: style_ContourApril_16,
                popuplayertitle: 'Contour-April',
                interactive: false,
                title: '<img src="styles/legend/ContourApril_16.png" /> Contour-April'
            });
var format_ContourMei_17 = new ol.format.GeoJSON();
var features_ContourMei_17 = format_ContourMei_17.readFeatures(json_ContourMei_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourMei_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourMei_17.addFeatures(features_ContourMei_17);
var lyr_ContourMei_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourMei_17, 
                style: style_ContourMei_17,
                popuplayertitle: 'Contour-Mei',
                interactive: false,
                title: '<img src="styles/legend/ContourMei_17.png" /> Contour-Mei'
            });
var format_ContourJuni_18 = new ol.format.GeoJSON();
var features_ContourJuni_18 = format_ContourJuni_18.readFeatures(json_ContourJuni_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourJuni_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourJuni_18.addFeatures(features_ContourJuni_18);
var lyr_ContourJuni_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourJuni_18, 
                style: style_ContourJuni_18,
                popuplayertitle: 'Contour-Juni',
                interactive: false,
                title: '<img src="styles/legend/ContourJuni_18.png" /> Contour-Juni'
            });
var format_ContourJuli_19 = new ol.format.GeoJSON();
var features_ContourJuli_19 = format_ContourJuli_19.readFeatures(json_ContourJuli_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourJuli_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourJuli_19.addFeatures(features_ContourJuli_19);
var lyr_ContourJuli_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourJuli_19, 
                style: style_ContourJuli_19,
                popuplayertitle: 'Contour-Juli',
                interactive: false,
                title: '<img src="styles/legend/ContourJuli_19.png" /> Contour-Juli'
            });
var format_ContourAgustus_20 = new ol.format.GeoJSON();
var features_ContourAgustus_20 = format_ContourAgustus_20.readFeatures(json_ContourAgustus_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourAgustus_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourAgustus_20.addFeatures(features_ContourAgustus_20);
var lyr_ContourAgustus_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourAgustus_20, 
                style: style_ContourAgustus_20,
                popuplayertitle: 'Contour-Agustus',
                interactive: false,
                title: '<img src="styles/legend/ContourAgustus_20.png" /> Contour-Agustus'
            });
var format_ContourSeptember_21 = new ol.format.GeoJSON();
var features_ContourSeptember_21 = format_ContourSeptember_21.readFeatures(json_ContourSeptember_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourSeptember_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourSeptember_21.addFeatures(features_ContourSeptember_21);
var lyr_ContourSeptember_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourSeptember_21, 
                style: style_ContourSeptember_21,
                popuplayertitle: 'Contour-September',
                interactive: false,
                title: '<img src="styles/legend/ContourSeptember_21.png" /> Contour-September'
            });
var format_ContourOktober_22 = new ol.format.GeoJSON();
var features_ContourOktober_22 = format_ContourOktober_22.readFeatures(json_ContourOktober_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourOktober_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourOktober_22.addFeatures(features_ContourOktober_22);
var lyr_ContourOktober_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourOktober_22, 
                style: style_ContourOktober_22,
                popuplayertitle: 'Contour-Oktober',
                interactive: false,
                title: '<img src="styles/legend/ContourOktober_22.png" /> Contour-Oktober'
            });
var format_ContourNovember_23 = new ol.format.GeoJSON();
var features_ContourNovember_23 = format_ContourNovember_23.readFeatures(json_ContourNovember_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourNovember_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourNovember_23.addFeatures(features_ContourNovember_23);
var lyr_ContourNovember_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourNovember_23, 
                style: style_ContourNovember_23,
                popuplayertitle: 'Contour-November',
                interactive: false,
                title: '<img src="styles/legend/ContourNovember_23.png" /> Contour-November'
            });
var format_ContourDesember_24 = new ol.format.GeoJSON();
var features_ContourDesember_24 = format_ContourDesember_24.readFeatures(json_ContourDesember_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourDesember_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourDesember_24.addFeatures(features_ContourDesember_24);
var lyr_ContourDesember_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourDesember_24, 
                style: style_ContourDesember_24,
                popuplayertitle: 'Contour-Desember',
                interactive: false,
                title: '<img src="styles/legend/ContourDesember_24.png" /> Contour-Desember'
            });
var format_ContourKaltim_25 = new ol.format.GeoJSON();
var features_ContourKaltim_25 = format_ContourKaltim_25.readFeatures(json_ContourKaltim_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourKaltim_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourKaltim_25.addFeatures(features_ContourKaltim_25);
var lyr_ContourKaltim_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourKaltim_25, 
                style: style_ContourKaltim_25,
                popuplayertitle: 'Contour-Kaltim',
                interactive: false,
                title: '<img src="styles/legend/ContourKaltim_25.png" /> Contour-Kaltim'
            });
var format_GarisBatasKotaKabupatenKaltim_26 = new ol.format.GeoJSON();
var features_GarisBatasKotaKabupatenKaltim_26 = format_GarisBatasKotaKabupatenKaltim_26.readFeatures(json_GarisBatasKotaKabupatenKaltim_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_GarisBatasKotaKabupatenKaltim_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarisBatasKotaKabupatenKaltim_26.addFeatures(features_GarisBatasKotaKabupatenKaltim_26);
var lyr_GarisBatasKotaKabupatenKaltim_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GarisBatasKotaKabupatenKaltim_26, 
                style: style_GarisBatasKotaKabupatenKaltim_26,
                popuplayertitle: 'Garis Batas Kota/Kabupaten Kaltim',
                interactive: false,
                title: '<img src="styles/legend/GarisBatasKotaKabupatenKaltim_26.png" /> Garis Batas Kota/Kabupaten Kaltim'
            });
var format_TitikStasiunBMKGKaltim_27 = new ol.format.GeoJSON();
var features_TitikStasiunBMKGKaltim_27 = format_TitikStasiunBMKGKaltim_27.readFeatures(json_TitikStasiunBMKGKaltim_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_TitikStasiunBMKGKaltim_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikStasiunBMKGKaltim_27.addFeatures(features_TitikStasiunBMKGKaltim_27);
var lyr_TitikStasiunBMKGKaltim_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikStasiunBMKGKaltim_27, 
                style: style_TitikStasiunBMKGKaltim_27,
                popuplayertitle: 'Titik Stasiun BMKG Kaltim',
                interactive: true,
                title: '<img src="styles/legend/TitikStasiunBMKGKaltim_27.png" /> Titik Stasiun BMKG Kaltim'
            });

lyr_Januari_0.setVisible(false);lyr_Februari_1.setVisible(false);lyr_Maret_2.setVisible(false);lyr_April_3.setVisible(false);lyr_Mei_4.setVisible(false);lyr_Juni_5.setVisible(false);lyr_Juli_6.setVisible(false);lyr_Agustus_7.setVisible(false);lyr_September_8.setVisible(false);lyr_Oktober_9.setVisible(false);lyr_November_10.setVisible(false);lyr_Desember_11.setVisible(false);lyr_JanuariDesember_12.setVisible(false);lyr_ContourJanuari_13.setVisible(false);lyr_ContourFebruari_14.setVisible(false);lyr_ContourMaret_15.setVisible(false);lyr_ContourApril_16.setVisible(false);lyr_ContourMei_17.setVisible(false);lyr_ContourJuni_18.setVisible(false);lyr_ContourJuli_19.setVisible(false);lyr_ContourAgustus_20.setVisible(false);lyr_ContourSeptember_21.setVisible(false);lyr_ContourOktober_22.setVisible(false);lyr_ContourNovember_23.setVisible(false);lyr_ContourDesember_24.setVisible(false);lyr_ContourKaltim_25.setVisible(true);lyr_GarisBatasKotaKabupatenKaltim_26.setVisible(true);lyr_TitikStasiunBMKGKaltim_27.setVisible(true);
var layersList = [lyr_Januari_0,lyr_Februari_1,lyr_Maret_2,lyr_April_3,lyr_Mei_4,lyr_Juni_5,lyr_Juli_6,lyr_Agustus_7,lyr_September_8,lyr_Oktober_9,lyr_November_10,lyr_Desember_11,lyr_JanuariDesember_12,lyr_ContourJanuari_13,lyr_ContourFebruari_14,lyr_ContourMaret_15,lyr_ContourApril_16,lyr_ContourMei_17,lyr_ContourJuni_18,lyr_ContourJuli_19,lyr_ContourAgustus_20,lyr_ContourSeptember_21,lyr_ContourOktober_22,lyr_ContourNovember_23,lyr_ContourDesember_24,lyr_ContourKaltim_25,lyr_GarisBatasKotaKabupatenKaltim_26,lyr_TitikStasiunBMKGKaltim_27];
lyr_Januari_0.set('fieldAliases', {'DN': 'DN', });
lyr_Februari_1.set('fieldAliases', {'DN': 'DN', });
lyr_Maret_2.set('fieldAliases', {'DN': 'DN', });
lyr_April_3.set('fieldAliases', {'DN': 'DN', });
lyr_Mei_4.set('fieldAliases', {'DN': 'DN', });
lyr_Juni_5.set('fieldAliases', {'DN': 'DN', });
lyr_Juli_6.set('fieldAliases', {'DN': 'DN', });
lyr_Agustus_7.set('fieldAliases', {'DN': 'DN', });
lyr_September_8.set('fieldAliases', {'DN': 'DN', });
lyr_Oktober_9.set('fieldAliases', {'DN': 'DN', });
lyr_November_10.set('fieldAliases', {'DN': 'DN', });
lyr_Desember_11.set('fieldAliases', {'DN': 'DN', });
lyr_JanuariDesember_12.set('fieldAliases', {'DN': 'DN', });
lyr_ContourJanuari_13.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Hujan': 'Hujan', });
lyr_ContourFebruari_14.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourMaret_15.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourApril_16.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourMei_17.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourJuni_18.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourJuli_19.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourAgustus_20.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourSeptember_21.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourOktober_22.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourNovember_23.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourDesember_24.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourKaltim_25.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_GarisBatasKotaKabupatenKaltim_26.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fid': 'fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'kdbbps': 'kdbbps', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdpbps': 'kdpbps', 'kdpkab': 'kdpkab', 'kdppum': 'kdppum', 'luaswh': 'luaswh', 'tipadm': 'tipadm', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'wiadkc': 'wiadkc', 'wiadkk': 'wiadkk', 'wiadpr': 'wiadpr', 'wiadkd': 'wiadkd', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'contoh 1 i': 'contoh 1 i', 'contoh 1_1': 'contoh 1_1', });
lyr_TitikStasiunBMKGKaltim_27.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'Januari': 'Januari', 'Februari': 'Februari', 'Maret': 'Maret', 'April': 'April', 'Mei': 'Mei', 'Juni': 'Juni', 'Juli': 'Juli', 'Agustus': 'Agustus', 'September': 'September', 'Oktober': 'Oktober', 'November': 'November', 'Desember': 'Desember', 'Total': 'Total', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_Januari_0.set('fieldImages', {'DN': 'Range', });
lyr_Februari_1.set('fieldImages', {'DN': 'Range', });
lyr_Maret_2.set('fieldImages', {'DN': 'Range', });
lyr_April_3.set('fieldImages', {'DN': 'Range', });
lyr_Mei_4.set('fieldImages', {'DN': 'Range', });
lyr_Juni_5.set('fieldImages', {'DN': 'Range', });
lyr_Juli_6.set('fieldImages', {'DN': 'Range', });
lyr_Agustus_7.set('fieldImages', {'DN': 'Range', });
lyr_September_8.set('fieldImages', {'DN': 'Range', });
lyr_Oktober_9.set('fieldImages', {'DN': 'Range', });
lyr_November_10.set('fieldImages', {'DN': 'Range', });
lyr_Desember_11.set('fieldImages', {'DN': 'Range', });
lyr_JanuariDesember_12.set('fieldImages', {'DN': 'Range', });
lyr_ContourJanuari_13.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Hujan': 'TextEdit', });
lyr_ContourFebruari_14.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourMaret_15.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourApril_16.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourMei_17.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_ContourJuni_18.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourJuli_19.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourAgustus_20.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourSeptember_21.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourOktober_22.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourNovember_23.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourDesember_24.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourKaltim_25.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_GarisBatasKotaKabupatenKaltim_26.set('fieldImages', {'ogc_fid': 'Range', 'fid': 'TextEdit', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'kdbbps': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdebps': 'TextEdit', 'kdepum': 'TextEdit', 'kdpbps': 'TextEdit', 'kdpkab': 'TextEdit', 'kdppum': 'TextEdit', 'luaswh': 'TextEdit', 'tipadm': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadkc': 'TextEdit', 'wiadkk': 'TextEdit', 'wiadpr': 'TextEdit', 'wiadkd': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'contoh 1 i': 'TextEdit', 'contoh 1_1': 'TextEdit', });
lyr_TitikStasiunBMKGKaltim_27.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'Januari': 'TextEdit', 'Februari': 'TextEdit', 'Maret': 'TextEdit', 'April': 'TextEdit', 'Mei': 'TextEdit', 'Juni': 'TextEdit', 'Juli': 'TextEdit', 'Agustus': 'TextEdit', 'September': 'TextEdit', 'Oktober': 'TextEdit', 'November': 'TextEdit', 'Desember': 'TextEdit', 'Total': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Januari_0.set('fieldLabels', {'DN': 'no label', });
lyr_Februari_1.set('fieldLabels', {'DN': 'no label', });
lyr_Maret_2.set('fieldLabels', {'DN': 'no label', });
lyr_April_3.set('fieldLabels', {'DN': 'no label', });
lyr_Mei_4.set('fieldLabels', {'DN': 'no label', });
lyr_Juni_5.set('fieldLabels', {'DN': 'no label', });
lyr_Juli_6.set('fieldLabels', {'DN': 'no label', });
lyr_Agustus_7.set('fieldLabels', {'DN': 'no label', });
lyr_September_8.set('fieldLabels', {'DN': 'no label', });
lyr_Oktober_9.set('fieldLabels', {'DN': 'no label', });
lyr_November_10.set('fieldLabels', {'DN': 'no label', });
lyr_Desember_11.set('fieldLabels', {'DN': 'no label', });
lyr_JanuariDesember_12.set('fieldLabels', {'DN': 'no label', });
lyr_ContourJanuari_13.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Hujan': 'hidden field', });
lyr_ContourFebruari_14.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourMaret_15.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourApril_16.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourMei_17.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourJuni_18.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourJuli_19.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourAgustus_20.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourSeptember_21.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourOktober_22.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourNovember_23.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourDesember_24.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourKaltim_25.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_GarisBatasKotaKabupatenKaltim_26.set('fieldLabels', {'ogc_fid': 'hidden field', 'fid': 'hidden field', 'objectid': 'hidden field', 'namobj': 'hidden field', 'fcode': 'hidden field', 'remark': 'hidden field', 'metadata': 'hidden field', 'srs_id': 'hidden field', 'kdbbps': 'hidden field', 'kdcbps': 'hidden field', 'kdcpum': 'hidden field', 'kdebps': 'hidden field', 'kdepum': 'hidden field', 'kdpbps': 'hidden field', 'kdpkab': 'hidden field', 'kdppum': 'hidden field', 'luaswh': 'hidden field', 'tipadm': 'hidden field', 'wadmkc': 'hidden field', 'wadmkd': 'hidden field', 'wadmkk': 'hidden field', 'wadmpr': 'hidden field', 'wiadkc': 'hidden field', 'wiadkk': 'hidden field', 'wiadpr': 'hidden field', 'wiadkd': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'contoh 1 i': 'hidden field', 'contoh 1_1': 'hidden field', });
lyr_TitikStasiunBMKGKaltim_27.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'header label - visible with data', 'Januari': 'header label - visible with data', 'Februari': 'header label - visible with data', 'Maret': 'header label - visible with data', 'April': 'header label - always visible', 'Mei': 'header label - always visible', 'Juni': 'header label - visible with data', 'Juli': 'header label - visible with data', 'Agustus': 'header label - visible with data', 'September': 'header label - visible with data', 'Oktober': 'header label - visible with data', 'November': 'header label - visible with data', 'Desember': 'header label - visible with data', 'Total': 'hidden field', 'Rata2': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_TitikStasiunBMKGKaltim_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});