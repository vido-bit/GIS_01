namespace A09Server {
    window.addEventListener("load", init);
    // let form: HTMLFormElement;
    let responseText: HTMLDivElement;
    let formData: FormData;
    let query: URLSearchParams;
    let htmlButton: HTMLButtonElement;
    let jsonButton: HTMLButtonElement;

    async function init(_event: Event): Promise<void> {
        generateDisplay();
        htmlButton = <HTMLButtonElement>document.querySelector("#htmlbutton");
        jsonButton = <HTMLButtonElement>document.querySelector("#jsonbutton");
        htmlButton.addEventListener("click", getHtml);
        jsonButton.addEventListener("click", getJson);
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        query = new URLSearchParams(<any>formData);
    }

    function generateDisplay(): void {
        responseText = <HTMLDivElement>document.querySelector("#response");
    }

    async function getHtml(): Promise<void> {
        let adresse: string = "http://localhost:8100";
        adresse += "/html";
        adresse += "?" + query.toString();
        let response: Response = await fetch(adresse);
        let responseOutput: string = await response.text();
        responseText.innerHTML = responseOutput;
    }
    async function getJson(): Promise<void> {
        let adresse: string = "http://localhost:8100";
        adresse += "/json";
        adresse += "?" + query.toString();
        let response: Response = await fetch(adresse);
        let responseOutput: string = await response.text();
        let jsonResponse: JSON = JSON.parse(responseOutput);
        console.log(jsonResponse);
    }
}