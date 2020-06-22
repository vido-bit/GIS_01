"use strict";
var A09Server;
(function (A09Server) {
    window.addEventListener("load", init);
    let button = document.querySelector("button");
    async function init(_event) {
        button.addEventListener("click", communicate.bind(button));
    }
    async function communicate(_click) {
        let formData = new FormData(document.forms[0]);
        let adresse = "https://vido-bit.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        adresse += "?" + query.toString();
        console.log(adresse);
        let response = await fetch(adresse);
        let responseOutput = await response.url;
        responseOutput = responseOutput.replace("https://vido-bit.herokuapp.com/", "");
        console.log(responseOutput);
    }
})(A09Server || (A09Server = {}));
//# sourceMappingURL=script.js.map