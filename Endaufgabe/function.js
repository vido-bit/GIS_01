"use strict";
var Freezer;
(function (Freezer) {
    async function communicate(_url) {
        let toppingResponse = await fetch("toppings.json");
        Freezer.jsonObj = await toppingResponse.json();
        let baseResponse = await fetch("yogurtbases.json");
        Freezer.jsonBase = await baseResponse.json();
    }
    Freezer.communicate = communicate;
})(Freezer || (Freezer = {}));
//# sourceMappingURL=function.js.map