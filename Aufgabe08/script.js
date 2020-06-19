"use strict";
var A08Server;
(function (A08Server) {
    window.addEventListener("load", init);
    async function init(_event) {
        let button = document.querySelector("#klick");
        button.addEventListener("klick", communicate.bind(button));
    }
    async function communicate(_klick) {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let url = "https://testservergis01.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let test = await response.formData();
        console.log(test);
    }
})(A08Server || (A08Server = {}));
//# sourceMappingURL=script.js.map