namespace A09Server {
    window.addEventListener("load", init);
    // let form: HTMLFormElement;
    let adresse: string = "https://vido-bit.herokuapp.com/";
    let formData: FormData = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let htmlButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#htmlbutton");
    let jsonButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#jsonbutton");

    async function init(_event: Event): Promise<void> {
        htmlButton.addEventListener("click", getHtml);
        jsonButton.addEventListener("click", getJson);
    }

    async function getHtml(): Promise<void> {
        adresse += "/html";
        adresse += "?" + query.toString();
        let response: Response = await fetch(adresse);
        let responseOutput: string = await response.text();
        let responseText: HTMLDivElement = <HTMLDivElement>document.querySelector("#response");
        responseText.innerHTML = responseOutput;
    }
    async function getJson(): Promise<void> {
        adresse += "/json";
        adresse += "?" + query.toString();
        let response: Response = await fetch(adresse);
        let responseOutput: string = await response.text();
        let jsonResponse: string = JSON.parse(responseOutput);
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
}