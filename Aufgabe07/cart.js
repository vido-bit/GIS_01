"use strict";
var Produkte;
(function (Produkte) {
    Produkte.jsonObj = [];
    async function communicate(_url) {
        let response = await fetch("products.json");
        Produkte.jsonObj = await response.json();
        //console.log("Response", jsonObj);
        //  let produkte: Produkt[] = JSON.parse(jsonObj);
        // console.log("Produkte:", produkte);
    }
    Produkte.communicate = communicate;
})(Produkte || (Produkte = {}));
//# sourceMappingURL=cart.js.map