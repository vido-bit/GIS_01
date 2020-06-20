"use strict";
var A08Server;
(function (A08Server) {
    window.addEventListener("load", init);
    let button = document.querySelector("#klick");
    async function init(_event) {
        button.addEventListener("click", communicate.bind(button));
    }
    async function communicate(_click) {
        let formData = new FormData(document.forms[0]);
        let url = "https://testservergis01.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let responseOutput = await response.url;
        responseOutput = responseOutput.replace("https://testservergis01.herokuapp.com/", "");
        console.log(responseOutput);
    }
})(A08Server || (A08Server = {}));
//# sourceMappingURL=script.js.map