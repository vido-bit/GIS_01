"use strict";
/*
import { ParsedUrlQuery } from "querystring";
import { MongoClientOptions, MongoClient } from "mongodb";
*/
var A11Server;
(function (A11Server) {
    window.addEventListener("load", init);
    // let form: HTMLFormElement;
    let responseText;
    let getButton;
    let sendButton;
    let formData = new FormData(document.forms[0]);
    async function init(_event) {
        generateDisplay();
        getButton = document.querySelector("#getbutton");
        sendButton = document.querySelector("#sendbutton");
        getButton.addEventListener("click", getData);
        sendButton.addEventListener("click", sendData);
    }
    function generateDisplay() {
        responseText = document.querySelector("#response");
    }
    async function getData() {
        let adresse = "https://vido-bit.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        // query = new URLSearchParams(<any>formData);
        let response = await fetch(adresse);
        let responseOutput = await response.text();
        responseText.innerHTML = responseOutput;
    }
    async function sendData() {
        formData = new FormData(document.forms[0]);
        let adresse = "https://vido-bit.herokuapp.com/send";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        adresse += "?" + query.toString();
        await fetch(adresse);
    }
})(A11Server || (A11Server = {}));
//# sourceMappingURL=script.js.map