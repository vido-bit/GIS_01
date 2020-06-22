namespace A08Server {
    window.addEventListener("load", init);
    let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");

    async function init(_event: Event): Promise<void> {

        button.addEventListener("click", communicate.bind(button));

    }

    async function communicate(_click: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://vido-bit.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url);
        let responseOutput: String = await response.url;
        responseOutput = responseOutput.replace("https://vido-bit.herokuapp.com/", "");
        console.log(responseOutput);
    }

}