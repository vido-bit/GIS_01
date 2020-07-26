namespace Freezer {

    window.addEventListener("load", init);
    export let jsonObj: Topping[] = [];
    //export let jsonBase: Yogurt[] = [];
    let jsonYogurt: Topping;
    let toppingCart: Topping;
    //   let yogurtCart: Yogurt;
    //let yogurtBase: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    let configDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("config");
    let clearButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
    clearButton.addEventListener("click", onClickClear);

    async function init(_event: Event): Promise<void> {
        buildVisualisierung();
        await communicate("toppings.json");
        await communicate("yogurtbases.json");
        createHTMLElements();

        function createHTMLElements(): void {

            let formDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("formdiv");
            let firstName: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            formDiv.appendChild(firstName);
            firstName.setAttribute("class", "formular");
            firstName.setAttribute("id", "firstname");
            firstName.setAttribute("placeholder", "Vorname");
            firstName.setAttribute("name", "Vorname");
            let lastName: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            formDiv.appendChild(lastName);
            lastName.setAttribute("class", "formular");
            lastName.setAttribute("id", "lastname");
            lastName.setAttribute("placeholder", "Nachname");
            lastName.setAttribute("name", "Nachname");
            let streetName: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            formDiv.appendChild(streetName);
            streetName.setAttribute("class", "formular");
            streetName.setAttribute("id", "streetname");
            streetName.setAttribute("placeholder", "Straße und Hasunummer");
            streetName.setAttribute("name", "Straße");
            let cityName: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            formDiv.appendChild(cityName);
            cityName.setAttribute("class", "formular");
            cityName.setAttribute("id", "cityname");
            cityName.setAttribute("placeholder", "Wohnort");
            cityName.setAttribute("name", "Wohnort");
            let orderButton: HTMLInputElement = <HTMLInputElement>document.createElement("button");
            formDiv.appendChild(orderButton).innerHTML = "Order!";
            orderButton.setAttribute("id", "orderbtn");
            orderButton.setAttribute("type", "submit");
            orderButton.setAttribute("value", "Bestellung abschicken");
            orderButton.addEventListener("click", sendOrder);

            let configBase: HTMLDivElement = <HTMLDivElement>document.getElementById("base");

            for (let i: number = 0; i < jsonObj.length; i++) {
                if (jsonObj[i].category == "yogurt") {
                    let baseDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                    baseDiv.setAttribute("class", "bases");
                    baseDiv.setAttribute("id", "base" + i);
                    baseDiv.addEventListener("click", handleBaseClick.bind(jsonObj[i]));
                    configBase.appendChild(baseDiv);
                    let baseImg: HTMLImageElement = <HTMLImageElement>document.createElement("img");
                    baseImg.setAttribute("src", (jsonObj[i].bild));
                    baseImg.setAttribute("class", "baseImg");
                    baseImg.setAttribute("alt", "Lecker Frozen Yogurt");
                    baseDiv.appendChild(baseImg);
                    let baseName: HTMLHeadingElement = <HTMLHeadingElement>document.createElement("h4");
                    baseName.setAttribute("class", "basename");
                    baseName.innerHTML = (jsonObj)[i].name;
                    baseDiv.appendChild(baseName);
                    let basePreis: HTMLHeadingElement = <HTMLHeadingElement>document.createElement("h5");
                    basePreis.setAttribute("class", "basepreis");
                    basePreis.innerHTML = (jsonObj)[i].preis.toLocaleString() + "€";
                    baseDiv.appendChild(basePreis);
                }
                if (jsonObj[i].category == "toppings") {
                    let toppingDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                    toppingDiv.setAttribute("class", "topping");
                    toppingDiv.setAttribute("id", "topping" + i);
                    document.getElementById("toppingsammlung")?.appendChild(toppingDiv);
                    toppingDiv.addEventListener("click", handleToppingClick.bind(jsonObj[i]));
                    let toppingImg: HTMLImageElement = <HTMLImageElement>document.createElement("img");
                    toppingImg.setAttribute("class", "topping_img");
                    toppingImg.setAttribute("src", (jsonObj)[i].bild);
                    toppingImg.setAttribute("alt", "Topping Vorschau");
                    document.getElementById("topping" + i)?.appendChild(toppingImg);
                    let toppingHeading: HTMLHeadingElement = <HTMLHeadingElement>document.createElement("h4");
                    toppingHeading.setAttribute("class", "topping_h");
                    toppingHeading.innerHTML = (jsonObj)[i].name;
                    document.getElementById("topping" + i)?.appendChild(toppingHeading);
                    let toppingPreis: HTMLHeadingElement = <HTMLHeadingElement>document.createElement("h5");
                    toppingPreis.setAttribute("class", "topping_preis");
                    toppingPreis.innerHTML = (jsonObj)[i].preis.toLocaleString() + "€";
                    document.getElementById("topping" + i)?.appendChild(toppingPreis);
                }

            }

        }
    }
    async function sendOrder(_click: Event): Promise<void> {
        //let url: string = "http://localhost:8100";
        let url: string = "https://frozen-yogurt.herokuapp.com/";
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/bestellungen" + "?" + query.toString();
        let response: Response = await fetch(url);
        localStorage.clear();
        let getToAdminLink: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        getToAdminLink.setAttribute("href", "https://vido-bit.github.io/GIS_01/Endaufgabe/admin.html");
        getToAdminLink.setAttribute("target", "_blank");
        getToAdminLink.style.fontSize = "30px";
        console.log(response);<
    }

    function handleBaseClick(this: Topping, _click: Event): void {
        //let yogurtKey: string = <string>localStorage.key("category")
        //localStorage.removeItem("yogurt");
        /*    if (document.getElementsByClassName("yogurt")) {
                 localStorage.removeItem(this.category);
               //  location.reload();
             }
             else {
                 */
        if (localStorage.length > 0) {
            for (let i: number = 0; i < localStorage.length; i++) {
                let toppingKey: string = <string>localStorage.key(i);
                let jsonString: string = <string>localStorage.getItem(toppingKey);
                jsonYogurt = <Topping>JSON.parse(jsonString);
            }
        }
        // console.log(jsonYogurt.name)
        //console.log(jsonYogurt.category);
        if (jsonYogurt.category == "yogurt") {
            localStorage.removeItem(jsonYogurt.category);
        }
        chooseBaseFlavour(this);
        buildVisualisierung();
    }
    function handleToppingClick(this: Topping, _click: Event): void {
        if (document.getElementById(this.name)) {
            localStorage.removeItem(this.name);
            location.reload();
        }
        else {
            addTopping(this);
            buildVisualisierung();
        }
    }
    function chooseBaseFlavour(_yogurt: Topping): void {
        let yogurtStorage: string = JSON.stringify(_yogurt);
        localStorage.setItem(_yogurt.category, yogurtStorage);
        console.log(localStorage);
        // console.log(JSON.stringify(_yogurt.name));
    }
    function addTopping(_topping: Topping): void {
        /*  if (JSON.stringify(_topping)==toppingStorage)
          let toppingStorage: string = JSON.stringify(_topping);
          localStorage.setItem(_topping.name, toppingStorage);
          console.log(localStorage);
          console.log(JSON.stringify(_topping.name));
          configDiv.appendChild(toppingPlus);
          */

        let toppingStorage: string = JSON.stringify(_topping);

        localStorage.setItem(_topping.name, toppingStorage);
        //console.log(localStorage);

    }
    function buildVisualisierung(): void {

        for (let i: number = 0; i < localStorage.length; i++) {
            let toppingKey: string = <string>localStorage.key(i);
            let jsonString: string = <string>localStorage.getItem(toppingKey);
            toppingCart = <Topping>JSON.parse(jsonString);

            if (toppingCart.category == "toppings") {
                let toppingPlus: HTMLImageElement = <HTMLImageElement>document.createElement("img");
                // if (_topping.vorschau != toppingCart.vorschau) {
                //if (toppingPlus.getAttribute("src") != JSON.stringify(_topping.vorschau)) {
                // let removeTopping: HTMLImageElement = <HTMLImageElement>document.getElementById(_topping.name);
                configDiv.appendChild(toppingPlus);
                //console.log(toppingCart.name);
                toppingPlus.setAttribute("id", toppingCart.name);
                toppingPlus.setAttribute("src", toppingCart.vorschau);
                //toppingPlus.setAttribute("alt", toppingCart.name);
                toppingPlus.setAttribute("class", toppingCart.category);
                toppingPlus.style.zIndex = "5";

            }
            if (toppingCart.category == "yogurt") {
                let yogurtChoice: HTMLImageElement = <HTMLImageElement>document.createElement("img");
                configDiv.appendChild(yogurtChoice);
                yogurtChoice.setAttribute("id", toppingCart.name);
                yogurtChoice.setAttribute("src", toppingCart.vorschau);
                // yogurtChoice.setAttribute("alt", yogurtCart.name);
                yogurtChoice.setAttribute("class", toppingCart.category);
                yogurtChoice.style.zIndex = "0";
                console.log(localStorage);
            }
            /*             // else {
              localStorage.removeItem(toppingCart.name);
              location.reload();
              let removeItem: HTMLElement = <HTMLElement>document.getElementById(_topping.name);
              configDiv.appendChild(removeItem);
              configDiv.removeChild(removeItem);
              console.log(_topping.name + " wurde entfernt");
          }
      }
     
    }
                  * /
              /*      else {
                localStorage.removeItem(_topping.name);
                location.reload();
                configDiv.removeChild(toppingPlus);
                console.log(_topping.name + " wurde entfernt");
          
              }
              
          }
             */
        }
    }
    function onClickClear(_click: Event): void {
        localStorage.clear();
        location.reload();
    }
}