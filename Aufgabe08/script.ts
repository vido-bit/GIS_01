namespace A08Server {
    window.addEventListener("load", init);

    async function init(_event: Event): Promise<void> {

        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#klick");
        button.addEventListener("klick", communicate.bind(button));

        //  await communicate("https://testservergis01.herokuapp.com/");

    }

    async function communicate(_event: Event): Promise<void> {
        let response: Response = await fetch("https://testservergis01.herokuapp.com/");
        let test = await response.formData();
        console.log(test);
    }
}