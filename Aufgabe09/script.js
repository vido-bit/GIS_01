"use strict";
var A09Server;
(function (A09Server) {
    window.addEventListener("load", init);
    let form;
    let adresse = "https://vido-bit.herokuapp.com/";
    let button = document.querySelector("button");
    async function init(_event) {
        button.addEventListener("click", communicate.bind(button));
        //let response: Response = await fetch ("Data.json");
        //let offer: string = await response.text();
        //let data: Data = JSON.parse(offer);
        //generateContent(data);
        /*
                form = <HTMLFormElement>document.querySelector("form");
                let slider : HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
                let submit : HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        
                form.addEventListener("change", handleChange);
                slider.addEventListener("input", displayAmount);
                submit.addEventListener("click", sendOrder);
        
                communicate();
                */
    }
    async function communicate(_click) {
        let formData = new FormData(document.forms[0]);
        //  let adresse: string = "https://vido-bit.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        adresse += "?" + query.toString();
        console.log(adresse);
        let response = await fetch(adresse);
        let responseOutput = await response.text();
        let jsonResponse = JSON.parse(responseOutput);
        alert(responseOutput);
        // responseOutput = responseOutput.replace("https://vido-bit.herokuapp.com/", "");
        console.log(jsonResponse);
    }
})(A09Server || (A09Server = {}));
//# sourceMappingURL=script.js.map