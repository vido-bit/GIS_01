"use strict";
var A08Server;
(function (A08Server) {
    window.addEventListener("load", init);
    async function init(_event) {
        let button = document.querySelector("#klick");
        button.addEventListener("klick", communicate.bind(button));
        //  await communicate("https://testservergis01.herokuapp.com/");
    }
    async function communicate(_event) {
        let response = await fetch("https://testservergis01.herokuapp.com/");
        let test = await response.formData();
        console.log(test);
    }
})(A08Server || (A08Server = {}));
//# sourceMappingURL=script.js.map