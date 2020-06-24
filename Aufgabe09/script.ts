namespace A09Server {
    window.addEventListener("load", init);
    let form: HTMLFormElement;
    let adresse: string = "https://vido-bit.herokuapp.com/";
    let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");

    async function init(_event: Event): Promise<void> {
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

    async function communicate(_click: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        //  let adresse: string = "https://vido-bit.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        adresse += "?" + query.toString();
        console.log(adresse);
        let response: Response = await fetch(adresse);
        let responseOutput: string = await response.text();
        let jsonResponse = JSON.parse(responseOutput);
        alert(responseOutput);
        // responseOutput = responseOutput.replace("https://vido-bit.herokuapp.com/", "");
        console.log(jsonResponse);
        (<HTMLDivElement>document.querySelector("#response")).innerHTML = responseOutput;
    }

}