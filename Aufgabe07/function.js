"use strict";
var Produkte;
(function (Produkte) {
    async function communicate(_url) {
        let response = await fetch("products.json");
        Produkte.jsonObj = await response.json();
    }
    Produkte.communicate = communicate;
})(Produkte || (Produkte = {}));
//# sourceMappingURL=function.js.map