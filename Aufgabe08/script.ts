namespace A08Server {
    window.addEventListener("load", init);
    async function init(_event: Event): Promise<void> {

        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#klick");
        button.addEventListener("klick", communicate.bind(button));

    }

    async function communicate(_klick: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://testservergis01.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let response: Response = await fetch(url);
        let test: FormData = await response.formData();
        console.log(test);
    }

}