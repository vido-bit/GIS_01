namespace Freezer {

    window.addEventListener("load", init);
    export let jsonObj: Topping[] = [];
    export let jsonBase: Yogurt[] = [];
    let toppingCart: Topping;
    let yogurtBase: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    let configDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("config");
    let clearButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
    clearButton.addEventListener("click", onClickClear);

    async function init(_event: Event): Promise<void> {
        buildVisualisierung();
        await communicate("toppings.json");
        await communicate("yogurtbases.json");
        createHTMLElements();

        function createHTMLElements(): void {

            configDiv.appendChild(yogurtBase);
            yogurtBase.setAttribute("src", "bilder/frozen-yogurt.png");
            yogurtBase.setAttribute("id", "configbase");


            //  let toppingsammlung: HTMLDivElement = <HTMLDivElement>document.getElementById("toppingsammlung");

            let configBase: HTMLDivElement = <HTMLDivElement>document.getElementById("base");
            for (let i: number = 0; i < jsonBase.length; i++) {
                let baseDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                baseDiv.setAttribute("class", "bases");
                baseDiv.setAttribute("id", "base" + i);
                baseDiv.addEventListener("click", handleBaseClick.bind(jsonBase[i]));
                configBase.appendChild(baseDiv);
                let baseImg: HTMLImageElement = <HTMLImageElement>document.createElement("img");
                baseImg.setAttribute("src", (jsonBase[i].img));
                baseImg.setAttribute("class", "baseImg");
                baseImg.setAttribute("alt", "Lecker Frozen Yogurt");
                baseDiv.appendChild(baseImg);
                let baseName: HTMLHeadingElement = <HTMLHeadingElement>document.createElement("h4");
                baseName.setAttribute("class", "basename");
                baseName.innerHTML = (jsonBase)[i].name;
                baseDiv.appendChild(baseName);
                let basePreis: HTMLHeadingElement = <HTMLHeadingElement>document.createElement("h5");
                basePreis.setAttribute("class", "basepreis");
                basePreis.innerHTML = (jsonBase)[i].preis.toLocaleString() + "€";
                baseDiv.appendChild(basePreis);
            }


            for (let i: number = 0; i < jsonObj.length; i++) {

                //let keinFragezeichenOperator: HTMLElement = <HTMLElement>document.getElementById("topping" + i);

                let toppingDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                toppingDiv.setAttribute("class", "toppings");
                toppingDiv.setAttribute("id", "topping" + i);
                document.getElementById("toppingsammlung")?.appendChild(toppingDiv);
                toppingDiv.addEventListener("click", handleToppingClick.bind(jsonObj[i]));
                let toppingImg: HTMLImageElement = <HTMLImageElement>document.createElement("img");
                toppingImg.setAttribute("class", "topping_img");
                toppingImg.setAttribute("src", (jsonObj)[i].img);
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

                //  let toppingVorschau: HTMLImageElement = <
            }

        }
    }

    function handleBaseClick(this: Yogurt, _click: Event): void {
        chooseBaseFlavour(this);
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
    async function chooseBaseFlavour(_yogurt: Yogurt): Promise<void> {
        console.log(JSON.stringify(_yogurt.name));
        yogurtBase.setAttribute("src", _yogurt.img);

    }
    async function addTopping(_topping: Topping): Promise<void> {
        /*  if (JSON.stringify(_topping)==toppingStorage)
          let toppingStorage: string = JSON.stringify(_topping);
          localStorage.setItem(_topping.name, toppingStorage);
          console.log(localStorage);
          console.log(JSON.stringify(_topping.name));
          configDiv.appendChild(toppingPlus);
          */

        let toppingStorage: string = JSON.stringify(_topping);

        localStorage.setItem(_topping.name, toppingStorage);
        console.log(localStorage);

    }
    function buildVisualisierung(): void {


        for (let i: number = 0; i < localStorage.length; i++) {
            let toppingKey: string = <string>localStorage.key(i);
            let jsonString: string = <string>localStorage.getItem(toppingKey);
            toppingCart = <Topping>JSON.parse(jsonString);
            console.log(toppingCart);

            let toppingPlus: HTMLImageElement = <HTMLImageElement>document.createElement("img");
            // if (_topping.vorschau != toppingCart.vorschau) {
            //if (toppingPlus.getAttribute("src") != JSON.stringify(_topping.vorschau)) {
            // let removeTopping: HTMLImageElement = <HTMLImageElement>document.getElementById(_topping.name);
            configDiv.appendChild(toppingPlus);
            console.log(toppingCart.name);
            toppingPlus.setAttribute("id", toppingCart.name);
            toppingPlus.setAttribute("src", toppingCart.vorschau);
            toppingPlus.setAttribute("alt", toppingCart.name);
            toppingPlus.setAttribute("class", "topping-vorschau");
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