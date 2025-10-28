ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:23890").setExtent([110.564366, -3.202930, 123.613170, 3.677348]);
var wms_layers = [];

var format_Kaltim_0 = new ol.format.GeoJSON();
var features_Kaltim_0 = format_Kaltim_0.readFeatures(json_Kaltim_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Kaltim_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kaltim_0.addFeatures(features_Kaltim_0);
var lyr_Kaltim_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kaltim_0, 
                style: style_Kaltim_0,
                popuplayertitle: 'Kaltim',
                interactive: false,
    title: 'Kaltim<br />\
    <img src="styles/legend/Kaltim_0_0.png" /> Berau<br />\
    <img src="styles/legend/Kaltim_0_1.png" /> Kalimantan Timur<br />\
    <img src="styles/legend/Kaltim_0_2.png" /> Kota Balikpapan<br />\
    <img src="styles/legend/Kaltim_0_3.png" /> Kota Bontang<br />\
    <img src="styles/legend/Kaltim_0_4.png" /> Kota Samarinda<br />\
    <img src="styles/legend/Kaltim_0_5.png" /> Kutai Barat<br />\
    <img src="styles/legend/Kaltim_0_6.png" /> Kutai Kartanegara<br />\
    <img src="styles/legend/Kaltim_0_7.png" /> Kutai Timur<br />\
    <img src="styles/legend/Kaltim_0_8.png" /> Mahakam Ulu<br />\
    <img src="styles/legend/Kaltim_0_9.png" /> Paser<br />\
    <img src="styles/legend/Kaltim_0_10.png" /> Penajam Paser Utara<br />' });
var format_Januari_1 = new ol.format.GeoJSON();
var features_Januari_1 = format_Januari_1.readFeatures(json_Januari_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Januari_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Januari_1.addFeatures(features_Januari_1);
var lyr_Januari_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Januari_1, 
                style: style_Januari_1,
                popuplayertitle: 'Januari',
                interactive: false,
    title: 'Januari<br />\
    <img src="styles/legend/Januari_1_0.png" /> 133 - 161<br />\
    <img src="styles/legend/Januari_1_1.png" /> 161 - 178<br />\
    <img src="styles/legend/Januari_1_2.png" /> 178 - 195<br />\
    <img src="styles/legend/Januari_1_3.png" /> 195 - 211<br />\
    <img src="styles/legend/Januari_1_4.png" /> 211 - 230<br />\
    <img src="styles/legend/Januari_1_5.png" /> 230 - 248<br />\
    <img src="styles/legend/Januari_1_6.png" /> 248 - 262<br />\
    <img src="styles/legend/Januari_1_7.png" /> 262 - 277<br />\
    <img src="styles/legend/Januari_1_8.png" /> 277 - 323<br />' });
var format_Februari_2 = new ol.format.GeoJSON();
var features_Februari_2 = format_Februari_2.readFeatures(json_Februari_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Februari_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Februari_2.addFeatures(features_Februari_2);
var lyr_Februari_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Februari_2, 
                style: style_Februari_2,
                popuplayertitle: 'Februari',
                interactive: false,
    title: 'Februari<br />\
    <img src="styles/legend/Februari_2_0.png" /> 62 - 92<br />\
    <img src="styles/legend/Februari_2_1.png" /> 92 - 110<br />\
    <img src="styles/legend/Februari_2_2.png" /> 110 - 129<br />\
    <img src="styles/legend/Februari_2_3.png" /> 129 - 147<br />\
    <img src="styles/legend/Februari_2_4.png" /> 147 - 170<br />\
    <img src="styles/legend/Februari_2_5.png" /> 170 - 187<br />\
    <img src="styles/legend/Februari_2_6.png" /> 187 - 205<br />\
    <img src="styles/legend/Februari_2_7.png" /> 205 - 223<br />\
    <img src="styles/legend/Februari_2_8.png" /> 223 - 268<br />' });
var format_Maret_3 = new ol.format.GeoJSON();
var features_Maret_3 = format_Maret_3.readFeatures(json_Maret_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Maret_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maret_3.addFeatures(features_Maret_3);
var lyr_Maret_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maret_3, 
                style: style_Maret_3,
                popuplayertitle: 'Maret',
                interactive: false,
    title: 'Maret<br />\
    <img src="styles/legend/Maret_3_0.png" /> 90 - 134<br />\
    <img src="styles/legend/Maret_3_1.png" /> 134 - 164<br />\
    <img src="styles/legend/Maret_3_2.png" /> 164 - 196<br />\
    <img src="styles/legend/Maret_3_3.png" /> 196 - 236<br />\
    <img src="styles/legend/Maret_3_4.png" /> 236 - 272<br />\
    <img src="styles/legend/Maret_3_5.png" /> 272 - 296<br />\
    <img src="styles/legend/Maret_3_6.png" /> 296 - 319<br />\
    <img src="styles/legend/Maret_3_7.png" /> 319 - 345<br />\
    <img src="styles/legend/Maret_3_8.png" /> 345 - 398<br />' });
var format_April_4 = new ol.format.GeoJSON();
var features_April_4 = format_April_4.readFeatures(json_April_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_April_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_April_4.addFeatures(features_April_4);
var lyr_April_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_April_4, 
                style: style_April_4,
                popuplayertitle: 'April',
                interactive: false,
    title: 'April<br />\
    <img src="styles/legend/April_4_0.png" /> 77 - 125<br />\
    <img src="styles/legend/April_4_1.png" /> 125 - 141<br />\
    <img src="styles/legend/April_4_2.png" /> 141 - 152<br />\
    <img src="styles/legend/April_4_3.png" /> 152 - 161<br />\
    <img src="styles/legend/April_4_4.png" /> 161 - 170<br />\
    <img src="styles/legend/April_4_5.png" /> 170 - 179<br />\
    <img src="styles/legend/April_4_6.png" /> 179 - 188<br />\
    <img src="styles/legend/April_4_7.png" /> 188 - 199<br />\
    <img src="styles/legend/April_4_8.png" /> 199 - 233<br />' });
var format_Mei_5 = new ol.format.GeoJSON();
var features_Mei_5 = format_Mei_5.readFeatures(json_Mei_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Mei_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mei_5.addFeatures(features_Mei_5);
var lyr_Mei_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mei_5, 
                style: style_Mei_5,
                popuplayertitle: 'Mei',
                interactive: false,
    title: 'Mei<br />\
    <img src="styles/legend/Mei_5_0.png" /> 227 - 282<br />\
    <img src="styles/legend/Mei_5_1.png" /> 282 - 292<br />\
    <img src="styles/legend/Mei_5_2.png" /> 292 - 302<br />\
    <img src="styles/legend/Mei_5_3.png" /> 302 - 312<br />\
    <img src="styles/legend/Mei_5_4.png" /> 312 - 320<br />\
    <img src="styles/legend/Mei_5_5.png" /> 320 - 329<br />\
    <img src="styles/legend/Mei_5_6.png" /> 329 - 342<br />\
    <img src="styles/legend/Mei_5_7.png" /> 342 - 356<br />\
    <img src="styles/legend/Mei_5_8.png" /> 356 - 379<br />' });
var format_Juni_6 = new ol.format.GeoJSON();
var features_Juni_6 = format_Juni_6.readFeatures(json_Juni_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Juni_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Juni_6.addFeatures(features_Juni_6);
var lyr_Juni_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Juni_6, 
                style: style_Juni_6,
                popuplayertitle: 'Juni',
                interactive: false,
    title: 'Juni<br />\
    <img src="styles/legend/Juni_6_0.png" /> 172 - 199<br />\
    <img src="styles/legend/Juni_6_1.png" /> 199 - 210<br />\
    <img src="styles/legend/Juni_6_2.png" /> 210 - 219<br />\
    <img src="styles/legend/Juni_6_3.png" /> 219 - 229.8<br />\
    <img src="styles/legend/Juni_6_4.png" /> 229.8 - 240<br />\
    <img src="styles/legend/Juni_6_5.png" /> 240 - 252<br />\
    <img src="styles/legend/Juni_6_6.png" /> 252 - 266<br />\
    <img src="styles/legend/Juni_6_7.png" /> 266 - 296<br />\
    <img src="styles/legend/Juni_6_8.png" /> 296 - 367<br />' });
var format_Juli_7 = new ol.format.GeoJSON();
var features_Juli_7 = format_Juli_7.readFeatures(json_Juli_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Juli_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Juli_7.addFeatures(features_Juli_7);
var lyr_Juli_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Juli_7, 
                style: style_Juli_7,
                popuplayertitle: 'Juli',
                interactive: false,
    title: 'Juli<br />\
    <img src="styles/legend/Juli_7_0.png" /> 63 - 97<br />\
    <img src="styles/legend/Juli_7_1.png" /> 97 - 130<br />\
    <img src="styles/legend/Juli_7_2.png" /> 130 - 138<br />\
    <img src="styles/legend/Juli_7_3.png" /> 138 - 144<br />\
    <img src="styles/legend/Juli_7_4.png" /> 144 - 150<br />\
    <img src="styles/legend/Juli_7_5.png" /> 150 - 157<br />\
    <img src="styles/legend/Juli_7_6.png" /> 157 - 168<br />\
    <img src="styles/legend/Juli_7_7.png" /> 168 - 180<br />\
    <img src="styles/legend/Juli_7_8.png" /> 180 - 196<br />' });
var format_Agustus_8 = new ol.format.GeoJSON();
var features_Agustus_8 = format_Agustus_8.readFeatures(json_Agustus_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Agustus_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agustus_8.addFeatures(features_Agustus_8);
var lyr_Agustus_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agustus_8, 
                style: style_Agustus_8,
                popuplayertitle: 'Agustus',
                interactive: false,
    title: 'Agustus<br />\
    <img src="styles/legend/Agustus_8_0.png" /> 54 - 135<br />\
    <img src="styles/legend/Agustus_8_1.png" /> 135 - 183<br />\
    <img src="styles/legend/Agustus_8_2.png" /> 183 - 216<br />\
    <img src="styles/legend/Agustus_8_3.png" /> 216 - 249<br />\
    <img src="styles/legend/Agustus_8_4.png" /> 249 - 292<br />\
    <img src="styles/legend/Agustus_8_5.png" /> 292 - 344<br />\
    <img src="styles/legend/Agustus_8_6.png" /> 344 - 443<br />\
    <img src="styles/legend/Agustus_8_7.png" /> 443 - 555<br />\
    <img src="styles/legend/Agustus_8_8.png" /> 555 - 732<br />' });
var format_September_9 = new ol.format.GeoJSON();
var features_September_9 = format_September_9.readFeatures(json_September_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_September_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_September_9.addFeatures(features_September_9);
var lyr_September_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_September_9, 
                style: style_September_9,
                popuplayertitle: 'September',
                interactive: false,
    title: 'September<br />\
    <img src="styles/legend/September_9_0.png" /> 128 - 197<br />\
    <img src="styles/legend/September_9_1.png" /> 197 - 236<br />\
    <img src="styles/legend/September_9_2.png" /> 236 - 255<br />\
    <img src="styles/legend/September_9_3.png" /> 255 - 271<br />\
    <img src="styles/legend/September_9_4.png" /> 271 - 285<br />\
    <img src="styles/legend/September_9_5.png" /> 285 - 300<br />\
    <img src="styles/legend/September_9_6.png" /> 300 - 316<br />\
    <img src="styles/legend/September_9_7.png" /> 316 - 333<br />\
    <img src="styles/legend/September_9_8.png" /> 333 - 378<br />' });
var format_Oktober_10 = new ol.format.GeoJSON();
var features_Oktober_10 = format_Oktober_10.readFeatures(json_Oktober_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Oktober_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oktober_10.addFeatures(features_Oktober_10);
var lyr_Oktober_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oktober_10, 
                style: style_Oktober_10,
                popuplayertitle: 'Oktober',
                interactive: false,
    title: 'Oktober<br />\
    <img src="styles/legend/Oktober_10_0.png" /> 156 - 200<br />\
    <img src="styles/legend/Oktober_10_1.png" /> 200 - 214<br />\
    <img src="styles/legend/Oktober_10_2.png" /> 214 - 226<br />\
    <img src="styles/legend/Oktober_10_3.png" /> 226 - 241<br />\
    <img src="styles/legend/Oktober_10_4.png" /> 241 - 256<br />\
    <img src="styles/legend/Oktober_10_5.png" /> 256 - 269<br />\
    <img src="styles/legend/Oktober_10_6.png" /> 269 - 284<br />\
    <img src="styles/legend/Oktober_10_7.png" /> 284 - 299<br />\
    <img src="styles/legend/Oktober_10_8.png" /> 299 - 325<br />' });
var format_November_11 = new ol.format.GeoJSON();
var features_November_11 = format_November_11.readFeatures(json_November_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_November_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_November_11.addFeatures(features_November_11);
var lyr_November_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_November_11, 
                style: style_November_11,
                popuplayertitle: 'November',
                interactive: false,
    title: 'November<br />\
    <img src="styles/legend/November_11_0.png" /> 137 - 157<br />\
    <img src="styles/legend/November_11_1.png" /> 157 - 168<br />\
    <img src="styles/legend/November_11_2.png" /> 168 - 180.7<br />\
    <img src="styles/legend/November_11_3.png" /> 180.7 - 190<br />\
    <img src="styles/legend/November_11_4.png" /> 190 - 200<br />\
    <img src="styles/legend/November_11_5.png" /> 200 - 211<br />\
    <img src="styles/legend/November_11_6.png" /> 211 - 220<br />\
    <img src="styles/legend/November_11_7.png" /> 220 - 230<br />\
    <img src="styles/legend/November_11_8.png" /> 230 - 268<br />' });
var format_Desember_12 = new ol.format.GeoJSON();
var features_Desember_12 = format_Desember_12.readFeatures(json_Desember_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_Desember_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desember_12.addFeatures(features_Desember_12);
var lyr_Desember_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desember_12, 
                style: style_Desember_12,
                popuplayertitle: 'Desember',
                interactive: false,
    title: 'Desember<br />\
    <img src="styles/legend/Desember_12_0.png" /> 228 - 239<br />\
    <img src="styles/legend/Desember_12_1.png" /> 239 - 250<br />\
    <img src="styles/legend/Desember_12_2.png" /> 250 - 261<br />\
    <img src="styles/legend/Desember_12_3.png" /> 261 - 272<br />\
    <img src="styles/legend/Desember_12_4.png" /> 272 - 284<br />\
    <img src="styles/legend/Desember_12_5.png" /> 284 - 295<br />\
    <img src="styles/legend/Desember_12_6.png" /> 295 - 306<br />\
    <img src="styles/legend/Desember_12_7.png" /> 306 - 317<br />\
    <img src="styles/legend/Desember_12_8.png" /> 317 - 328<br />' });
var format_JanuariDesember_13 = new ol.format.GeoJSON();
var features_JanuariDesember_13 = format_JanuariDesember_13.readFeatures(json_JanuariDesember_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_JanuariDesember_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JanuariDesember_13.addFeatures(features_JanuariDesember_13);
var lyr_JanuariDesember_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JanuariDesember_13, 
                style: style_JanuariDesember_13,
                popuplayertitle: 'Januari-Desember',
                interactive: false,
    title: 'Januari-Desember<br />\
    <img src="styles/legend/JanuariDesember_13_0.png" /> 2148 - 2288<br />\
    <img src="styles/legend/JanuariDesember_13_1.png" /> 2288 - 2429<br />\
    <img src="styles/legend/JanuariDesember_13_2.png" /> 2429 - 2569<br />\
    <img src="styles/legend/JanuariDesember_13_3.png" /> 2569 - 2710<br />\
    <img src="styles/legend/JanuariDesember_13_4.png" /> 2710 - 2850<br />\
    <img src="styles/legend/JanuariDesember_13_5.png" /> 2850 - 2991<br />\
    <img src="styles/legend/JanuariDesember_13_6.png" /> 2991 - 3131<br />\
    <img src="styles/legend/JanuariDesember_13_7.png" /> 3131 - 3272<br />\
    <img src="styles/legend/JanuariDesember_13_8.png" /> 3272 - 3412<br />' });
var format_ContourJanuari_14 = new ol.format.GeoJSON();
var features_ContourJanuari_14 = format_ContourJanuari_14.readFeatures(json_ContourJanuari_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourJanuari_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourJanuari_14.addFeatures(features_ContourJanuari_14);
var lyr_ContourJanuari_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourJanuari_14, 
                style: style_ContourJanuari_14,
                popuplayertitle: 'Contour-Januari',
                interactive: false,
                title: '<img src="styles/legend/ContourJanuari_14.png" /> Contour-Januari'
            });
var format_ContourFebruari_15 = new ol.format.GeoJSON();
var features_ContourFebruari_15 = format_ContourFebruari_15.readFeatures(json_ContourFebruari_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourFebruari_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourFebruari_15.addFeatures(features_ContourFebruari_15);
var lyr_ContourFebruari_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourFebruari_15, 
                style: style_ContourFebruari_15,
                popuplayertitle: 'Contour-Februari',
                interactive: false,
                title: '<img src="styles/legend/ContourFebruari_15.png" /> Contour-Februari'
            });
var format_ContourMaret_16 = new ol.format.GeoJSON();
var features_ContourMaret_16 = format_ContourMaret_16.readFeatures(json_ContourMaret_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourMaret_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourMaret_16.addFeatures(features_ContourMaret_16);
var lyr_ContourMaret_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourMaret_16, 
                style: style_ContourMaret_16,
                popuplayertitle: 'Contour-Maret',
                interactive: false,
                title: '<img src="styles/legend/ContourMaret_16.png" /> Contour-Maret'
            });
var format_ContourApril_17 = new ol.format.GeoJSON();
var features_ContourApril_17 = format_ContourApril_17.readFeatures(json_ContourApril_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourApril_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourApril_17.addFeatures(features_ContourApril_17);
var lyr_ContourApril_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourApril_17, 
                style: style_ContourApril_17,
                popuplayertitle: 'Contour-April',
                interactive: false,
                title: '<img src="styles/legend/ContourApril_17.png" /> Contour-April'
            });
var format_ContourMei_18 = new ol.format.GeoJSON();
var features_ContourMei_18 = format_ContourMei_18.readFeatures(json_ContourMei_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourMei_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourMei_18.addFeatures(features_ContourMei_18);
var lyr_ContourMei_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourMei_18, 
                style: style_ContourMei_18,
                popuplayertitle: 'Contour-Mei',
                interactive: false,
                title: '<img src="styles/legend/ContourMei_18.png" /> Contour-Mei'
            });
var format_ContourJuni_19 = new ol.format.GeoJSON();
var features_ContourJuni_19 = format_ContourJuni_19.readFeatures(json_ContourJuni_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourJuni_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourJuni_19.addFeatures(features_ContourJuni_19);
var lyr_ContourJuni_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourJuni_19, 
                style: style_ContourJuni_19,
                popuplayertitle: 'Contour-Juni',
                interactive: false,
                title: '<img src="styles/legend/ContourJuni_19.png" /> Contour-Juni'
            });
var format_ContourJuli_20 = new ol.format.GeoJSON();
var features_ContourJuli_20 = format_ContourJuli_20.readFeatures(json_ContourJuli_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourJuli_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourJuli_20.addFeatures(features_ContourJuli_20);
var lyr_ContourJuli_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourJuli_20, 
                style: style_ContourJuli_20,
                popuplayertitle: 'Contour-Juli',
                interactive: false,
                title: '<img src="styles/legend/ContourJuli_20.png" /> Contour-Juli'
            });
var format_ContourAgustus_21 = new ol.format.GeoJSON();
var features_ContourAgustus_21 = format_ContourAgustus_21.readFeatures(json_ContourAgustus_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourAgustus_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourAgustus_21.addFeatures(features_ContourAgustus_21);
var lyr_ContourAgustus_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourAgustus_21, 
                style: style_ContourAgustus_21,
                popuplayertitle: 'Contour-Agustus',
                interactive: false,
                title: '<img src="styles/legend/ContourAgustus_21.png" /> Contour-Agustus'
            });
var format_ContourSeptember_22 = new ol.format.GeoJSON();
var features_ContourSeptember_22 = format_ContourSeptember_22.readFeatures(json_ContourSeptember_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourSeptember_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourSeptember_22.addFeatures(features_ContourSeptember_22);
var lyr_ContourSeptember_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourSeptember_22, 
                style: style_ContourSeptember_22,
                popuplayertitle: 'Contour-September',
                interactive: false,
                title: '<img src="styles/legend/ContourSeptember_22.png" /> Contour-September'
            });
var format_ContourOktober_23 = new ol.format.GeoJSON();
var features_ContourOktober_23 = format_ContourOktober_23.readFeatures(json_ContourOktober_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourOktober_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourOktober_23.addFeatures(features_ContourOktober_23);
var lyr_ContourOktober_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourOktober_23, 
                style: style_ContourOktober_23,
                popuplayertitle: 'Contour-Oktober',
                interactive: false,
                title: '<img src="styles/legend/ContourOktober_23.png" /> Contour-Oktober'
            });
var format_ContourNovember_24 = new ol.format.GeoJSON();
var features_ContourNovember_24 = format_ContourNovember_24.readFeatures(json_ContourNovember_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourNovember_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourNovember_24.addFeatures(features_ContourNovember_24);
var lyr_ContourNovember_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourNovember_24, 
                style: style_ContourNovember_24,
                popuplayertitle: 'Contour-November',
                interactive: false,
                title: '<img src="styles/legend/ContourNovember_24.png" /> Contour-November'
            });
var format_ContourDesember_25 = new ol.format.GeoJSON();
var features_ContourDesember_25 = format_ContourDesember_25.readFeatures(json_ContourDesember_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourDesember_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourDesember_25.addFeatures(features_ContourDesember_25);
var lyr_ContourDesember_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourDesember_25, 
                style: style_ContourDesember_25,
                popuplayertitle: 'Contour-Desember',
                interactive: false,
                title: '<img src="styles/legend/ContourDesember_25.png" /> Contour-Desember'
            });
var format_ContourKaltim_26 = new ol.format.GeoJSON();
var features_ContourKaltim_26 = format_ContourKaltim_26.readFeatures(json_ContourKaltim_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_ContourKaltim_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourKaltim_26.addFeatures(features_ContourKaltim_26);
var lyr_ContourKaltim_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourKaltim_26, 
                style: style_ContourKaltim_26,
                popuplayertitle: 'Contour-Kaltim',
                interactive: false,
                title: '<img src="styles/legend/ContourKaltim_26.png" /> Contour-Kaltim'
            });
var format_GarisBatasKotaKabupatenKaltim_27 = new ol.format.GeoJSON();
var features_GarisBatasKotaKabupatenKaltim_27 = format_GarisBatasKotaKabupatenKaltim_27.readFeatures(json_GarisBatasKotaKabupatenKaltim_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_GarisBatasKotaKabupatenKaltim_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarisBatasKotaKabupatenKaltim_27.addFeatures(features_GarisBatasKotaKabupatenKaltim_27);
var lyr_GarisBatasKotaKabupatenKaltim_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GarisBatasKotaKabupatenKaltim_27, 
                style: style_GarisBatasKotaKabupatenKaltim_27,
                popuplayertitle: 'Garis Batas Kota/Kabupaten Kaltim',
                interactive: false,
                title: '<img src="styles/legend/GarisBatasKotaKabupatenKaltim_27.png" /> Garis Batas Kota/Kabupaten Kaltim'
            });
var format_CurahHujanKaltimJanuari2024_28 = new ol.format.GeoJSON();
var features_CurahHujanKaltimJanuari2024_28 = format_CurahHujanKaltimJanuari2024_28.readFeatures(json_CurahHujanKaltimJanuari2024_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_CurahHujanKaltimJanuari2024_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanKaltimJanuari2024_28.addFeatures(features_CurahHujanKaltimJanuari2024_28);
var lyr_CurahHujanKaltimJanuari2024_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanKaltimJanuari2024_28, 
                style: style_CurahHujanKaltimJanuari2024_28,
                popuplayertitle: 'Curah Hujan Kaltim Januari 2024',
                interactive: true,
                title: '<img src="styles/legend/CurahHujanKaltimJanuari2024_28.png" /> Curah Hujan Kaltim Januari 2024'
            });
var format_CurahHujanKaltimFebruari2024_29 = new ol.format.GeoJSON();
var features_CurahHujanKaltimFebruari2024_29 = format_CurahHujanKaltimFebruari2024_29.readFeatures(json_CurahHujanKaltimFebruari2024_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_CurahHujanKaltimFebruari2024_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanKaltimFebruari2024_29.addFeatures(features_CurahHujanKaltimFebruari2024_29);
var lyr_CurahHujanKaltimFebruari2024_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanKaltimFebruari2024_29, 
                style: style_CurahHujanKaltimFebruari2024_29,
                popuplayertitle: 'Curah Hujan Kaltim Februari 2024',
                interactive: true,
                title: '<img src="styles/legend/CurahHujanKaltimFebruari2024_29.png" /> Curah Hujan Kaltim Februari 2024'
            });
var format_CurahHujanKaltimMaret2024_30 = new ol.format.GeoJSON();
var features_CurahHujanKaltimMaret2024_30 = format_CurahHujanKaltimMaret2024_30.readFeatures(json_CurahHujanKaltimMaret2024_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_CurahHujanKaltimMaret2024_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanKaltimMaret2024_30.addFeatures(features_CurahHujanKaltimMaret2024_30);
var lyr_CurahHujanKaltimMaret2024_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanKaltimMaret2024_30, 
                style: style_CurahHujanKaltimMaret2024_30,
                popuplayertitle: 'Curah Hujan Kaltim Maret 2024',
                interactive: true,
                title: '<img src="styles/legend/CurahHujanKaltimMaret2024_30.png" /> Curah Hujan Kaltim Maret 2024'
            });
var format_CurahHujanKaltimApril2024_31 = new ol.format.GeoJSON();
var features_CurahHujanKaltimApril2024_31 = format_CurahHujanKaltimApril2024_31.readFeatures(json_CurahHujanKaltimApril2024_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_CurahHujanKaltimApril2024_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanKaltimApril2024_31.addFeatures(features_CurahHujanKaltimApril2024_31);
var lyr_CurahHujanKaltimApril2024_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanKaltimApril2024_31, 
                style: style_CurahHujanKaltimApril2024_31,
                popuplayertitle: 'Curah Hujan Kaltim April 2024',
                interactive: true,
                title: '<img src="styles/legend/CurahHujanKaltimApril2024_31.png" /> Curah Hujan Kaltim April 2024'
            });
var format_CurahHujanKaltimMei2024_32 = new ol.format.GeoJSON();
var features_CurahHujanKaltimMei2024_32 = format_CurahHujanKaltimMei2024_32.readFeatures(json_CurahHujanKaltimMei2024_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_CurahHujanKaltimMei2024_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanKaltimMei2024_32.addFeatures(features_CurahHujanKaltimMei2024_32);
var lyr_CurahHujanKaltimMei2024_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanKaltimMei2024_32, 
                style: style_CurahHujanKaltimMei2024_32,
                popuplayertitle: 'Curah Hujan Kaltim Mei 2024',
                interactive: true,
                title: '<img src="styles/legend/CurahHujanKaltimMei2024_32.png" /> Curah Hujan Kaltim Mei 2024'
            });
var format_CurahHujanKaltimJuni2024_33 = new ol.format.GeoJSON();
var features_CurahHujanKaltimJuni2024_33 = format_CurahHujanKaltimJuni2024_33.readFeatures(json_CurahHujanKaltimJuni2024_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_CurahHujanKaltimJuni2024_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanKaltimJuni2024_33.addFeatures(features_CurahHujanKaltimJuni2024_33);
var lyr_CurahHujanKaltimJuni2024_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanKaltimJuni2024_33, 
                style: style_CurahHujanKaltimJuni2024_33,
                popuplayertitle: 'Curah Hujan Kaltim Juni 2024',
                interactive: true,
                title: '<img src="styles/legend/CurahHujanKaltimJuni2024_33.png" /> Curah Hujan Kaltim Juni 2024'
            });
var format_CurahHujanKaltimJuli2024_34 = new ol.format.GeoJSON();
var features_CurahHujanKaltimJuli2024_34 = format_CurahHujanKaltimJuli2024_34.readFeatures(json_CurahHujanKaltimJuli2024_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_CurahHujanKaltimJuli2024_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanKaltimJuli2024_34.addFeatures(features_CurahHujanKaltimJuli2024_34);
var lyr_CurahHujanKaltimJuli2024_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanKaltimJuli2024_34, 
                style: style_CurahHujanKaltimJuli2024_34,
                popuplayertitle: 'Curah Hujan Kaltim Juli 2024',
                interactive: true,
                title: '<img src="styles/legend/CurahHujanKaltimJuli2024_34.png" /> Curah Hujan Kaltim Juli 2024'
            });
var format_CurahHujanKaltimAgustus2024_35 = new ol.format.GeoJSON();
var features_CurahHujanKaltimAgustus2024_35 = format_CurahHujanKaltimAgustus2024_35.readFeatures(json_CurahHujanKaltimAgustus2024_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_CurahHujanKaltimAgustus2024_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanKaltimAgustus2024_35.addFeatures(features_CurahHujanKaltimAgustus2024_35);
var lyr_CurahHujanKaltimAgustus2024_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanKaltimAgustus2024_35, 
                style: style_CurahHujanKaltimAgustus2024_35,
                popuplayertitle: 'Curah Hujan Kaltim Agustus 2024',
                interactive: true,
                title: '<img src="styles/legend/CurahHujanKaltimAgustus2024_35.png" /> Curah Hujan Kaltim Agustus 2024'
            });
var format_CurahHujanKaltimSeptember2024_36 = new ol.format.GeoJSON();
var features_CurahHujanKaltimSeptember2024_36 = format_CurahHujanKaltimSeptember2024_36.readFeatures(json_CurahHujanKaltimSeptember2024_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_CurahHujanKaltimSeptember2024_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanKaltimSeptember2024_36.addFeatures(features_CurahHujanKaltimSeptember2024_36);
var lyr_CurahHujanKaltimSeptember2024_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanKaltimSeptember2024_36, 
                style: style_CurahHujanKaltimSeptember2024_36,
                popuplayertitle: 'Curah Hujan Kaltim September 2024',
                interactive: true,
                title: '<img src="styles/legend/CurahHujanKaltimSeptember2024_36.png" /> Curah Hujan Kaltim September 2024'
            });
var format_CurahHujanKaltimOktober2024_37 = new ol.format.GeoJSON();
var features_CurahHujanKaltimOktober2024_37 = format_CurahHujanKaltimOktober2024_37.readFeatures(json_CurahHujanKaltimOktober2024_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_CurahHujanKaltimOktober2024_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanKaltimOktober2024_37.addFeatures(features_CurahHujanKaltimOktober2024_37);
var lyr_CurahHujanKaltimOktober2024_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanKaltimOktober2024_37, 
                style: style_CurahHujanKaltimOktober2024_37,
                popuplayertitle: 'Curah Hujan Kaltim Oktober 2024',
                interactive: true,
                title: '<img src="styles/legend/CurahHujanKaltimOktober2024_37.png" /> Curah Hujan Kaltim Oktober 2024'
            });
var format_CurahHujanKaltimNovember2024_38 = new ol.format.GeoJSON();
var features_CurahHujanKaltimNovember2024_38 = format_CurahHujanKaltimNovember2024_38.readFeatures(json_CurahHujanKaltimNovember2024_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_CurahHujanKaltimNovember2024_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanKaltimNovember2024_38.addFeatures(features_CurahHujanKaltimNovember2024_38);
var lyr_CurahHujanKaltimNovember2024_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanKaltimNovember2024_38, 
                style: style_CurahHujanKaltimNovember2024_38,
                popuplayertitle: 'Curah Hujan Kaltim November 2024',
                interactive: true,
                title: '<img src="styles/legend/CurahHujanKaltimNovember2024_38.png" /> Curah Hujan Kaltim November 2024'
            });
var format_CurahHujanKaltimDesember2024_39 = new ol.format.GeoJSON();
var features_CurahHujanKaltimDesember2024_39 = format_CurahHujanKaltimDesember2024_39.readFeatures(json_CurahHujanKaltimDesember2024_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_CurahHujanKaltimDesember2024_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanKaltimDesember2024_39.addFeatures(features_CurahHujanKaltimDesember2024_39);
var lyr_CurahHujanKaltimDesember2024_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanKaltimDesember2024_39, 
                style: style_CurahHujanKaltimDesember2024_39,
                popuplayertitle: 'Curah Hujan Kaltim Desember 2024',
                interactive: true,
                title: '<img src="styles/legend/CurahHujanKaltimDesember2024_39.png" /> Curah Hujan Kaltim Desember 2024'
            });
var format_TitikStasiunBMKGKaltim_40 = new ol.format.GeoJSON();
var features_TitikStasiunBMKGKaltim_40 = format_TitikStasiunBMKGKaltim_40.readFeatures(json_TitikStasiunBMKGKaltim_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23890'});
var jsonSource_TitikStasiunBMKGKaltim_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikStasiunBMKGKaltim_40.addFeatures(features_TitikStasiunBMKGKaltim_40);
var lyr_TitikStasiunBMKGKaltim_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikStasiunBMKGKaltim_40, 
                style: style_TitikStasiunBMKGKaltim_40,
                popuplayertitle: 'Titik Stasiun BMKG Kaltim',
                interactive: true,
                title: '<img src="styles/legend/TitikStasiunBMKGKaltim_40.png" /> Titik Stasiun BMKG Kaltim'
            });

lyr_Kaltim_0.setVisible(true);lyr_Januari_1.setVisible(false);lyr_Februari_2.setVisible(false);lyr_Maret_3.setVisible(false);lyr_April_4.setVisible(false);lyr_Mei_5.setVisible(false);lyr_Juni_6.setVisible(false);lyr_Juli_7.setVisible(false);lyr_Agustus_8.setVisible(false);lyr_September_9.setVisible(false);lyr_Oktober_10.setVisible(false);lyr_November_11.setVisible(false);lyr_Desember_12.setVisible(false);lyr_JanuariDesember_13.setVisible(true);lyr_ContourJanuari_14.setVisible(false);lyr_ContourFebruari_15.setVisible(false);lyr_ContourMaret_16.setVisible(false);lyr_ContourApril_17.setVisible(false);lyr_ContourMei_18.setVisible(false);lyr_ContourJuni_19.setVisible(false);lyr_ContourJuli_20.setVisible(false);lyr_ContourAgustus_21.setVisible(false);lyr_ContourSeptember_22.setVisible(false);lyr_ContourOktober_23.setVisible(false);lyr_ContourNovember_24.setVisible(false);lyr_ContourDesember_25.setVisible(false);lyr_ContourKaltim_26.setVisible(true);lyr_GarisBatasKotaKabupatenKaltim_27.setVisible(false);lyr_CurahHujanKaltimJanuari2024_28.setVisible(false);lyr_CurahHujanKaltimFebruari2024_29.setVisible(false);lyr_CurahHujanKaltimMaret2024_30.setVisible(false);lyr_CurahHujanKaltimApril2024_31.setVisible(false);lyr_CurahHujanKaltimMei2024_32.setVisible(false);lyr_CurahHujanKaltimJuni2024_33.setVisible(false);lyr_CurahHujanKaltimJuli2024_34.setVisible(false);lyr_CurahHujanKaltimAgustus2024_35.setVisible(false);lyr_CurahHujanKaltimSeptember2024_36.setVisible(false);lyr_CurahHujanKaltimOktober2024_37.setVisible(false);lyr_CurahHujanKaltimNovember2024_38.setVisible(false);lyr_CurahHujanKaltimDesember2024_39.setVisible(false);lyr_TitikStasiunBMKGKaltim_40.setVisible(true);
var layersList = [lyr_Kaltim_0,lyr_Januari_1,lyr_Februari_2,lyr_Maret_3,lyr_April_4,lyr_Mei_5,lyr_Juni_6,lyr_Juli_7,lyr_Agustus_8,lyr_September_9,lyr_Oktober_10,lyr_November_11,lyr_Desember_12,lyr_JanuariDesember_13,lyr_ContourJanuari_14,lyr_ContourFebruari_15,lyr_ContourMaret_16,lyr_ContourApril_17,lyr_ContourMei_18,lyr_ContourJuni_19,lyr_ContourJuli_20,lyr_ContourAgustus_21,lyr_ContourSeptember_22,lyr_ContourOktober_23,lyr_ContourNovember_24,lyr_ContourDesember_25,lyr_ContourKaltim_26,lyr_GarisBatasKotaKabupatenKaltim_27,lyr_CurahHujanKaltimJanuari2024_28,lyr_CurahHujanKaltimFebruari2024_29,lyr_CurahHujanKaltimMaret2024_30,lyr_CurahHujanKaltimApril2024_31,lyr_CurahHujanKaltimMei2024_32,lyr_CurahHujanKaltimJuni2024_33,lyr_CurahHujanKaltimJuli2024_34,lyr_CurahHujanKaltimAgustus2024_35,lyr_CurahHujanKaltimSeptember2024_36,lyr_CurahHujanKaltimOktober2024_37,lyr_CurahHujanKaltimNovember2024_38,lyr_CurahHujanKaltimDesember2024_39,lyr_TitikStasiunBMKGKaltim_40];
lyr_Kaltim_0.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fid': 'fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'kdbbps': 'kdbbps', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdpbps': 'kdpbps', 'kdpkab': 'kdpkab', 'kdppum': 'kdppum', 'luaswh': 'luaswh', 'tipadm': 'tipadm', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'wiadkc': 'wiadkc', 'wiadkk': 'wiadkk', 'wiadpr': 'wiadpr', 'wiadkd': 'wiadkd', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'contoh 1 i': 'contoh 1 i', 'contoh 1_1': 'contoh 1_1', });
lyr_Januari_1.set('fieldAliases', {'DN': 'DN', });
lyr_Februari_2.set('fieldAliases', {'DN': 'DN', });
lyr_Maret_3.set('fieldAliases', {'DN': 'DN', });
lyr_April_4.set('fieldAliases', {'DN': 'DN', });
lyr_Mei_5.set('fieldAliases', {'DN': 'DN', });
lyr_Juni_6.set('fieldAliases', {'DN': 'DN', });
lyr_Juli_7.set('fieldAliases', {'DN': 'DN', });
lyr_Agustus_8.set('fieldAliases', {'DN': 'DN', });
lyr_September_9.set('fieldAliases', {'DN': 'DN', });
lyr_Oktober_10.set('fieldAliases', {'DN': 'DN', });
lyr_November_11.set('fieldAliases', {'DN': 'DN', });
lyr_Desember_12.set('fieldAliases', {'DN': 'DN', });
lyr_JanuariDesember_13.set('fieldAliases', {'DN': 'DN', });
lyr_ContourJanuari_14.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Hujan': 'Hujan', });
lyr_ContourFebruari_15.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourMaret_16.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourApril_17.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourMei_18.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourJuni_19.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourJuli_20.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourAgustus_21.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourSeptember_22.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourOktober_23.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourNovember_24.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourDesember_25.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ContourKaltim_26.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_GarisBatasKotaKabupatenKaltim_27.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fid': 'fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'kdbbps': 'kdbbps', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdpbps': 'kdpbps', 'kdpkab': 'kdpkab', 'kdppum': 'kdppum', 'luaswh': 'luaswh', 'tipadm': 'tipadm', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'wiadkc': 'wiadkc', 'wiadkk': 'wiadkk', 'wiadpr': 'wiadpr', 'wiadkd': 'wiadkd', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'contoh 1 i': 'contoh 1 i', 'contoh 1_1': 'contoh 1_1', });
lyr_CurahHujanKaltimJanuari2024_28.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'Januari': 'Januari', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_CurahHujanKaltimFebruari2024_29.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'Februari': 'Februari', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_CurahHujanKaltimMaret2024_30.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'Maret': 'Maret', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_CurahHujanKaltimApril2024_31.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'April': 'April', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_CurahHujanKaltimMei2024_32.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'Mei': 'Mei', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_CurahHujanKaltimJuni2024_33.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'Juni': 'Juni', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_CurahHujanKaltimJuli2024_34.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'Juli': 'Juli', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_CurahHujanKaltimAgustus2024_35.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'Agustus': 'Agustus', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_CurahHujanKaltimSeptember2024_36.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'September': 'September', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_CurahHujanKaltimOktober2024_37.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'Oktober': 'Oktober', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_CurahHujanKaltimNovember2024_38.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'November': 'November', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_CurahHujanKaltimDesember2024_39.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'Desember': 'Desember', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_TitikStasiunBMKGKaltim_40.set('fieldAliases', {'No': 'No', 'Nama Stasiun': 'Nama Stasiun', 'Januari': 'Januari', 'Februari': 'Februari', 'Maret': 'Maret', 'April': 'April', 'Mei': 'Mei', 'Juni': 'Juni', 'Juli': 'Juli', 'Agustus': 'Agustus', 'September': 'September', 'Oktober': 'Oktober', 'November': 'November', 'Desember': 'Desember', 'Total': 'Total', 'Rata2': 'Rata2', 'Y': 'Y', 'X': 'X', });
lyr_Kaltim_0.set('fieldImages', {'ogc_fid': 'Range', 'fid': 'TextEdit', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'kdbbps': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdebps': 'TextEdit', 'kdepum': 'TextEdit', 'kdpbps': 'TextEdit', 'kdpkab': 'TextEdit', 'kdppum': 'TextEdit', 'luaswh': 'TextEdit', 'tipadm': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadkc': 'TextEdit', 'wiadkk': 'TextEdit', 'wiadpr': 'TextEdit', 'wiadkd': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'contoh 1 i': 'TextEdit', 'contoh 1_1': 'TextEdit', });
lyr_Januari_1.set('fieldImages', {'DN': 'Range', });
lyr_Februari_2.set('fieldImages', {'DN': 'Range', });
lyr_Maret_3.set('fieldImages', {'DN': 'Range', });
lyr_April_4.set('fieldImages', {'DN': 'Range', });
lyr_Mei_5.set('fieldImages', {'DN': 'Range', });
lyr_Juni_6.set('fieldImages', {'DN': 'Range', });
lyr_Juli_7.set('fieldImages', {'DN': 'Range', });
lyr_Agustus_8.set('fieldImages', {'DN': 'Range', });
lyr_September_9.set('fieldImages', {'DN': 'Range', });
lyr_Oktober_10.set('fieldImages', {'DN': 'Range', });
lyr_November_11.set('fieldImages', {'DN': 'Range', });
lyr_Desember_12.set('fieldImages', {'DN': 'Range', });
lyr_JanuariDesember_13.set('fieldImages', {'DN': 'Range', });
lyr_ContourJanuari_14.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Hujan': 'TextEdit', });
lyr_ContourFebruari_15.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourMaret_16.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourApril_17.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourMei_18.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_ContourJuni_19.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourJuli_20.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourAgustus_21.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourSeptember_22.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourOktober_23.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourNovember_24.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourDesember_25.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ContourKaltim_26.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_GarisBatasKotaKabupatenKaltim_27.set('fieldImages', {'ogc_fid': 'Range', 'fid': 'TextEdit', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'kdbbps': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdebps': 'TextEdit', 'kdepum': 'TextEdit', 'kdpbps': 'TextEdit', 'kdpkab': 'TextEdit', 'kdppum': 'TextEdit', 'luaswh': 'TextEdit', 'tipadm': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadkc': 'TextEdit', 'wiadkk': 'TextEdit', 'wiadpr': 'TextEdit', 'wiadkd': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'contoh 1 i': 'TextEdit', 'contoh 1_1': 'TextEdit', });
lyr_CurahHujanKaltimJanuari2024_28.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'Januari': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_CurahHujanKaltimFebruari2024_29.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'Februari': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_CurahHujanKaltimMaret2024_30.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'Maret': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_CurahHujanKaltimApril2024_31.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'April': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_CurahHujanKaltimMei2024_32.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'Mei': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_CurahHujanKaltimJuni2024_33.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'Juni': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_CurahHujanKaltimJuli2024_34.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'Juli': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_CurahHujanKaltimAgustus2024_35.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'Agustus': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_CurahHujanKaltimSeptember2024_36.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'September': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_CurahHujanKaltimOktober2024_37.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'Oktober': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_CurahHujanKaltimNovember2024_38.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'November': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_CurahHujanKaltimDesember2024_39.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'Desember': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_TitikStasiunBMKGKaltim_40.set('fieldImages', {'No': 'Range', 'Nama Stasiun': 'TextEdit', 'Januari': 'TextEdit', 'Februari': 'TextEdit', 'Maret': 'TextEdit', 'April': 'TextEdit', 'Mei': 'TextEdit', 'Juni': 'TextEdit', 'Juli': 'TextEdit', 'Agustus': 'TextEdit', 'September': 'TextEdit', 'Oktober': 'TextEdit', 'November': 'TextEdit', 'Desember': 'TextEdit', 'Total': 'TextEdit', 'Rata2': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Kaltim_0.set('fieldLabels', {'ogc_fid': 'hidden field', 'fid': 'hidden field', 'objectid': 'hidden field', 'namobj': 'hidden field', 'fcode': 'hidden field', 'remark': 'hidden field', 'metadata': 'hidden field', 'srs_id': 'hidden field', 'kdbbps': 'hidden field', 'kdcbps': 'hidden field', 'kdcpum': 'hidden field', 'kdebps': 'hidden field', 'kdepum': 'hidden field', 'kdpbps': 'hidden field', 'kdpkab': 'hidden field', 'kdppum': 'hidden field', 'luaswh': 'hidden field', 'tipadm': 'hidden field', 'wadmkc': 'hidden field', 'wadmkd': 'hidden field', 'wadmkk': 'hidden field', 'wadmpr': 'hidden field', 'wiadkc': 'hidden field', 'wiadkk': 'hidden field', 'wiadpr': 'hidden field', 'wiadkd': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'contoh 1 i': 'hidden field', 'contoh 1_1': 'hidden field', });
lyr_Januari_1.set('fieldLabels', {'DN': 'no label', });
lyr_Februari_2.set('fieldLabels', {'DN': 'no label', });
lyr_Maret_3.set('fieldLabels', {'DN': 'no label', });
lyr_April_4.set('fieldLabels', {'DN': 'no label', });
lyr_Mei_5.set('fieldLabels', {'DN': 'no label', });
lyr_Juni_6.set('fieldLabels', {'DN': 'no label', });
lyr_Juli_7.set('fieldLabels', {'DN': 'no label', });
lyr_Agustus_8.set('fieldLabels', {'DN': 'no label', });
lyr_September_9.set('fieldLabels', {'DN': 'no label', });
lyr_Oktober_10.set('fieldLabels', {'DN': 'no label', });
lyr_November_11.set('fieldLabels', {'DN': 'no label', });
lyr_Desember_12.set('fieldLabels', {'DN': 'no label', });
lyr_JanuariDesember_13.set('fieldLabels', {'DN': 'no label', });
lyr_ContourJanuari_14.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Hujan': 'hidden field', });
lyr_ContourFebruari_15.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourMaret_16.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourApril_17.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourMei_18.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourJuni_19.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourJuli_20.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourAgustus_21.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourSeptember_22.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourOktober_23.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourNovember_24.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourDesember_25.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_ContourKaltim_26.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'hidden field', });
lyr_GarisBatasKotaKabupatenKaltim_27.set('fieldLabels', {'ogc_fid': 'hidden field', 'fid': 'hidden field', 'objectid': 'hidden field', 'namobj': 'hidden field', 'fcode': 'hidden field', 'remark': 'hidden field', 'metadata': 'hidden field', 'srs_id': 'hidden field', 'kdbbps': 'hidden field', 'kdcbps': 'hidden field', 'kdcpum': 'hidden field', 'kdebps': 'hidden field', 'kdepum': 'hidden field', 'kdpbps': 'hidden field', 'kdpkab': 'hidden field', 'kdppum': 'hidden field', 'luaswh': 'hidden field', 'tipadm': 'hidden field', 'wadmkc': 'hidden field', 'wadmkd': 'hidden field', 'wadmkk': 'hidden field', 'wadmpr': 'hidden field', 'wiadkc': 'hidden field', 'wiadkk': 'hidden field', 'wiadpr': 'hidden field', 'wiadkd': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'contoh 1 i': 'hidden field', 'contoh 1_1': 'hidden field', });
lyr_CurahHujanKaltimJanuari2024_28.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'hidden field', 'Januari': 'header label - visible with data', 'Rata2': 'header label - visible with data', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_CurahHujanKaltimFebruari2024_29.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'hidden field', 'Februari': 'header label - visible with data', 'Rata2': 'header label - visible with data', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_CurahHujanKaltimMaret2024_30.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'hidden field', 'Maret': 'header label - visible with data', 'Rata2': 'header label - visible with data', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_CurahHujanKaltimApril2024_31.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'hidden field', 'April': 'header label - visible with data', 'Rata2': 'header label - visible with data', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_CurahHujanKaltimMei2024_32.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'hidden field', 'Mei': 'header label - visible with data', 'Rata2': 'header label - visible with data', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_CurahHujanKaltimJuni2024_33.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'hidden field', 'Juni': 'header label - visible with data', 'Rata2': 'header label - visible with data', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_CurahHujanKaltimJuli2024_34.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'hidden field', 'Juli': 'header label - visible with data', 'Rata2': 'header label - visible with data', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_CurahHujanKaltimAgustus2024_35.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'hidden field', 'Agustus': 'header label - visible with data', 'Rata2': 'header label - visible with data', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_CurahHujanKaltimSeptember2024_36.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'hidden field', 'September': 'header label - visible with data', 'Rata2': 'header label - visible with data', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_CurahHujanKaltimOktober2024_37.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'hidden field', 'Oktober': 'hidden field', 'Rata2': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_CurahHujanKaltimNovember2024_38.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'hidden field', 'November': 'header label - visible with data', 'Rata2': 'header label - visible with data', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_CurahHujanKaltimDesember2024_39.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'hidden field', 'Desember': 'header label - visible with data', 'Rata2': 'header label - visible with data', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_TitikStasiunBMKGKaltim_40.set('fieldLabels', {'No': 'hidden field', 'Nama Stasiun': 'header label - visible with data', 'Januari': 'hidden field', 'Februari': 'hidden field', 'Maret': 'hidden field', 'April': 'hidden field', 'Mei': 'hidden field', 'Juni': 'hidden field', 'Juli': 'hidden field', 'Agustus': 'hidden field', 'September': 'hidden field', 'Oktober': 'hidden field', 'November': 'hidden field', 'Desember': 'hidden field', 'Total': 'header label - visible with data', 'Rata2': 'header label - visible with data', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_TitikStasiunBMKGKaltim_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});