"use strict";
var A09Server;
(function (A09Server) {
    window.addEventListener("load", init);
    // let form: HTMLFormElement;
    let responseText;
    let formData;
    let query;
    let htmlButton;
    let jsonButton;
    async function init(_event) {
        generateDisplay();
        htmlButton = document.querySelector("#htmlbutton");
        jsonButton = document.querySelector("#jsonbutton");
        htmlButton.addEventListener("click", getHtml);
        jsonButton.addEventListener("click", getJson);
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        query = new URLSearchParams(formData);
    }
    function generateDisplay() {
        responseText = document.querySelector("#response");
    }
    async function getHtml() {
        let adresse = "hhttps://vido-bit.herokuapp.com";
        adresse += "/html";
        adresse += "?" + query.toString();
        let response = await fetch(adresse);
        let responseOutput = await response.text();
        responseText.innerHTML = responseOutput;
    }
    async function getJson() {
        let adresse = "https://vido-bit.herokuapp.com";
        adresse += "/json";
        adresse += "?" + query.toString();
        let response = await fetch(adresse);
        let responseOutput = await response.text();
        let jsonResponse = JSON.parse(responseOutput);
        console.log(jsonResponse);
    }
})(A09Server || (A09Server = {}));
//# sourceMappingURL=script.js.map