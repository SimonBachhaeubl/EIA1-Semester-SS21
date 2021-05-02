"use strict";
var namer = 6036;
var samer = 1262;
var afr = 1236;
var asia = 16274;
var aus = 2101;
var eur = 4209;
var eur08 = 4966;
var afr08 = 1028;
var samer08 = 1133;
var asia08 = 12955;
var namer08 = 6600;
var aus08 = 1993;
function komma(x) {
    return Number.parseFloat(x).toFixed(2);
}
var gesamt = komma(eur + afr + samer + namer + asia + aus);
var proz1 = komma(gesamt * 0.01);
var eurorel = komma(eur / proz1);
var eurov = komma(eur08 * 0.01);
var eurov2 = komma(eur08 - eur);
var eurov3 = komma(eurov2 / eurov);
var afrrel = komma(afr / proz1);
var asiarel = komma(asia / proz1);
var ausrel = komma(aus / proz1);
var samerrel = komma(samer / proz1);
var namerrel = komma(namer / proz1);
var namerv = komma(namer08 * 0.01);
var namerv2 = komma(namer08 - namer);
var namerv3 = komma(namerv2 / namerv);
var asiav = komma(asia08 * 0.01);
var asiav2 = komma(asia08 - asia);
var asiav3 = komma(asiav2 / asiav) * (-1);
var samerv = komma(samer08 * 0.01);
var samerv2 = komma(samer08 - samer);
var samerv3 = komma(samerv2 / samerv) * (-1);
var ausv = komma(aus08 * 0.01);
var ausv2 = komma(aus08 - aus);
var ausv3 = komma(ausv2 / ausv) * (-1);
var afrv = komma(afr08 * 0.01);
var afrv2 = komma(afr08 - afr);
var afrv3 = komma((afrv2 / afrv) * (-1));
function opa1() {
    document.getElementsByClassName(".europe").style.opacity = '0.1';
}
function samerfunction() {
    var _a;
    console.log("Emission von Südamerika ist : " + samer + "kg C02");
    console.log("Relativ zur Gesamtemission verursacht Südamerika damit :  " + samerrel + "%");
    console.log("Im Vergleich zu 2008 hat sich die Emission um " + samerv3 + "% verändert ");
    console.log("im Vergleich zu 2008 sind das" + samerv2 + "kg C02");
    console.log("______________________________________________________");
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("#p1").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = samer;
    document.querySelector("#h3e").innerHTML = samerrel + "%";
    document.querySelector("#h4e").innerHTML = samerv3 + "%";
    document.querySelector("#h5e").innerHTML = samerv2 + "Kg";
    (_a = document.querySelector("div.chart")) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "height: 4%");
    document.querySelector("div.prz").innerHTML = "4%";
}
function afrfunction() {
    var _a;
    console.log("Die Emission von Afrika ist : " + afr + "kg C02");
    console.log("Relativ zur Gesamtemission verursacht Afrika damit :  " + afrrel + "%");
    console.log("Im Vergleich zu 2008 die Emission um " + afrv3 + "% verändert ");
    console.log("Im Vergleich zu 2008 sind das" + afrv2 + "kg C02");
    console.log("______________________________________________________");
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#p1").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = afr;
    document.querySelector("#h3e").innerHTML = afrrel + "%";
    document.querySelector("#h4e").innerHTML = afrv3 + "%";
    document.querySelector("#h5e").innerHTML = afrv2 + "Kg";
    (_a = document.querySelector("div.chart")) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "height: 4%");
    document.querySelector("div.prz").innerHTML = "4%";
}
function namerfunction() {
    var _a;
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#p1").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("#h2e").innerHTML = namer;
    document.querySelector("#h3e").innerHTML = namerrel + "%";
    document.querySelector("#h4e").innerHTML = namerv3 + "%";
    document.querySelector("#h5e").innerHTML = namerv2 + "Kg";
    (_a = document.querySelector("div.chart")) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "height: 19%");
    document.querySelector("div.prz").innerHTML = "19%";
}
function asiafunction() {
    var _a;
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#p1").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = asia;
    document.querySelector("#h3e").innerHTML = asiarel + "%";
    document.querySelector("#h4e").innerHTML = asiav3 + "%";
    document.querySelector("#h5e").innerHTML = asiav2 + "Kg";
    (_a = document.querySelector("div.chart")) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "height: 52%");
    document.querySelector("div.prz").innerHTML = "52%";
}
function ausfunction() {
    var _a;
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#p1").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = aus;
    document.querySelector("#h3e").innerHTML = ausrel + "%";
    document.querySelector("#h4e").innerHTML = ausv3 + "%";
    document.querySelector("#h5e").innerHTML = ausv2 + "Kg";
    (_a = document.querySelector("div.chart")) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "height: 7%");
    document.querySelector("div.prz").innerHTML = "7%";
}
function eurofunction() {
    var _a;
    console.log("Die Emission von Europa ist : " + eur + "kg");
    console.log("Relativ zur Gesamtemission verursacht Europa damit :  " + eurorel + "%");
    console.log("Im Vergleich zu 2008 die Emission um " + eurov3 + "% verändert ");
    console.log("Im Vergleich zu 2008 sind das" + eurov2 + "kg C02");
    console.log("______________________________________________________");
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#p1").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#h2e").innerHTML = eur;
    document.querySelector("#h3e").innerHTML = eurorel + "%";
    document.querySelector("#h4e").innerHTML = eurov3 + "%";
    document.querySelector("#h5e").innerHTML = eurov2 + "Kg";
    (_a = document.querySelector("div.chart")) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "height: 14%");
    document.querySelector("div.prz").innerHTML = "14%";
}
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", eurofunction);
    document.querySelector(".northamerica").addEventListener("click", namerfunction);
    document.querySelector(".southamerica").addEventListener("click", samerfunction);
    document.querySelector(".africa").addEventListener("click", afrfunction);
    document.querySelector(".asia").addEventListener("click", asiafunction);
    document.querySelector(".australia").addEventListener("click", ausfunction);
}, console.log("Die Emission von Nordmerika ist : " + namer + "kg C02"));
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit :  " + namerrel + "%");
console.log("Im Vergleich zu 2008 die Emission um " + namerv3 + "% verändert ");
console.log("Im Vergleich zu 2008 sind das" + namerv2 + "kg C02");
console.log("______________________________________________________");
console.log("Die Emission von Asien ist : " + asia + "kg C02");
console.log("Relativ zur Gesamtemission verursacht Asien damit :  " + asiarel + "%");
console.log(" Im Vergleich zu 2008 die Emission um " + asiav3 + "% verändert ");
console.log("Im Vergleich zu 2008 sind das" + asiav2 + "kg C02");
console.log("______________________________________________________");
console.log("Die Emission von Australien ist : " + aus + "kg C02");
console.log("Relativ zur Gesamtemission verursacht Australien damit :  " + ausrel + "%");
console.log("Im Vergleich zu 2008 die Emission um " + ausv3 + "% verändert ");
console.log("Im Vergleich zu 2008 sind das" + ausv2 + "kg C02");
//# sourceMappingURL=script.js.map