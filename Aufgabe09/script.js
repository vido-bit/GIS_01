"use strict";
var A09Server;
(function (A09Server) {
    window.addEventListener("load", init);
    // let form: HTMLFormElement;
    let adresse = "https://vido-bit.herokuapp.com/";
    let formData = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    let query = new URLSearchParams(formData);
    let htmlButton = document.querySelector("#htmlbutton");
    let jsonButton = document.querySelector("#jsonbutton");
    async function init(_event) {
        htmlButton.addEventListener("click", getHtml);
        jsonButton.addEventListener("click", getJson);
    }
    async function getHtml() {
        adresse += "/html";
        adresse += "?" + query.toString();
        let response = await fetch(adresse);
        let responseOutput = await response.text();
        let responseText = document.querySelector("#response");
        responseText.innerHTML = responseOutput;
    }
    async function getJson() {
        adresse += "/json";
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