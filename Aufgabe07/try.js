"use strict";
var demo;
(function (demo) {
    console.log("START");
    communicate("https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/testjson.json");
    console.log("END");
    async function communicate(_url) {
        let response = await fetch(_url);
        response.json();
        console.log("Response", response);
    }
})(demo || (demo = {}));
//# sourceMappingURL=try.js.map