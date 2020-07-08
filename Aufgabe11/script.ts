/*
import { ParsedUrlQuery } from "querystring";
import { MongoClientOptions, MongoClient } from "mongodb";
*/
namespace A11Server {
    window.addEventListener("load", init);
    // let form: HTMLFormElement;
    let responseText: HTMLDivElement;
    let getButton: HTMLButtonElement;
    let sendButton: HTMLButtonElement;
    let formData: FormData = new FormData(document.forms[0]);


    async function init(_event: Event): Promise<void> {
        generateDisplay();
        getButton = <HTMLButtonElement>document.querySelector("#getbutton");
        sendButton = <HTMLButtonElement>document.querySelector("#sendbutton");
        getButton.addEventListener("click", getData);
        sendButton.addEventListener("click", sendData);
    }

    function generateDisplay(): void {
        responseText = <HTMLDivElement>document.querySelector("#response");
    }

    async function getData(): Promise<void> {
        let adresse: string = "https://vido-bit.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        // query = new URLSearchParams(<any>formData);
        let response: Response = await fetch(adresse);
        let responseOutput: string = await response.text();
        responseText.innerHTML = responseOutput;
    }
    async function sendData(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let adresse: string = "https://vido-bit.herokuapp.com/send";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        adresse += "?" + query.toString();
        await fetch(adresse);
    }


}