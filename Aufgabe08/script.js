"use strict";
var A08Server;
(function (A08Server) {
    window.addEventListener("load", init);
    function init(_event) {
        let button = document.querySelector("#klick");
        button.addEventListener("klick", handleButton);
    }
    async function communicate(_url) {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url += "?" + query.toString();
        let response = await fetch(_url);
        let test = await response.formData();
        console.log(test);
    }
    async function handleButton() {
        await communicate("https://testservergis01.herokuapp.com/");
    }
})(A08Server || (A08Server = {}));
//# sourceMappingURL=script.js.map