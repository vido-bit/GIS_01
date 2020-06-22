namespace A09Server {
    window.addEventListener("load", init);
    let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");

    async function init(_event: Event): Promise<void> {

        button.addEventListener("click", communicate.bind(button));

    }

    async function communicate(_click: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let adresse: string = "https://vido-bit.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        adresse += "?" + query.toString();
        console.log(adresse);
        let response: Response = await fetch(adresse);
        let responseOutput: String = await response.url;
        responseOutput = responseOutput.replace("https://vido-bit.herokuapp.com/", "");
        console.log(responseOutput);
    }

}