"use strict";
var A09Server;
(function (A09Server) {
    window.addEventListener("load", init);
    // let form: HTMLFormElement;
    let responseText;
    let adresse = "https://vido-bit.herokuapp.com/";
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
        //      adresse += "/html";
        adresse += "?" + query.toString();
        let response = await fetch(adresse);
        let responseOutput = await response.text();
        responseText.innerHTML = responseOutput;
    }
    async function getJson() {
        //      adresse += "/json";
        adresse += "?" + query.toString();
        let response = await fetch(adresse);
        let responseOutput = await response.text();
        let jsonResponse = JSON.parse(responseOutput);
        console.log(jsonResponse);
    }
    /*async function communicate(): Promise<void> {
       
        //let adresse: string = "https://vido-bit.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        adresse += "?" + query.toString();
        console.log(adresse);
        // let response: Response = await fetch(adresse);
        //let responseOutput: string = await response.text();
        // let jsonResponse = JSON.parse(responseOutput);
        //  alert(responseOutput);
        // responseOutput = responseOutput.replace("https://vido-bit.herokuapp.com/", "");
    }
*/
})(A09Server || (A09Server = {}));
//# sourceMappingURL=script.js.map