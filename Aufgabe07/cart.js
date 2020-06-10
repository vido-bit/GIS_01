"use strict";
var Produkte;
(function (Produkte) {
    Produkte.jsonObj = [];
    communicate("products.json");
    async function communicate(_url) {
        let response = await fetch("products.json");
        Produkte.jsonObj = await response.json();
        console.log("Response", Produkte.jsonObj);
        //  let produkte: Produkt[] = JSON.parse(jsonObj);
        // console.log("Produkte:", produkte);
    }
})(Produkte || (Produkte = {}));
//# sourceMappingURL=cart.js.map