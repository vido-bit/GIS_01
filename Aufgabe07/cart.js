"use strict";
var Warenkorb;
(function (Warenkorb) {
    console.log("START");
    communicate("products.json");
    console.log("END");
    async function communicate(_url) {
        let response = await fetch("products.json");
        let jsonObj = await response.json();
        console.log("Response", jsonObj);
        //  let produkte: Produkt[] = JSON.parse(jsonObj);
        // console.log("Produkte:", produkte);
    }
})(Warenkorb || (Warenkorb = {}));
//# sourceMappingURL=cart.js.map