namespace A08Server {
    window.addEventListener("load", init);



    function init(_event: Event):  void{

        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#klick");
        button.addEventListener("klick", handleButton);

    }

    async function communicate(_url: string): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url += "?" + query.toString();

        let response: Response = await fetch(_url);
        let test: FormData = await response.formData();
        console.log(test);
    }
    async function handleButton(): Promise<void> {
        await communicate("https://testservergis01.herokuapp.com/");
    }
}