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
    }
    function generateDisplay() {
        responseText = document.querySelector("#response");
    }
    async function getHtml() {
        let adresse = "https://vido-bit.herokuapp.com";
        // tslint:disable-next-line: no-any
        query = new URLSearchParams(formData);
        adresse += "/html";
        adresse += "?" + query.toString();
        let response = await fetch(adresse);
        let responseOutput = await response.text();
        responseText.innerHTML = responseOutput;
    }
    async function getJson() {
        let adresse = "https://vido-bit.herokuapp.com";
        // tslint:disable-next-line: no-any
        query = new URLSearchParams(formData);
        adresse += "/json";
        adresse += "?" + query.toString();
        let response = await fetch(adresse);
        //let responseOutput: string = await response.text();
        //let jsonResponse: JSON = JSON.parse(responseOutput);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    }
})(A09Server || (A09Server = {}));
//# sourceMappingURL=script.js.map