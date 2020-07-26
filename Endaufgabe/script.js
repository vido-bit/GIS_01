"use strict";
var Freezer;
(function (Freezer) {
    window.addEventListener("load", init);
    Freezer.jsonObj = [];
    //export let jsonBase: Yogurt[] = [];
    let jsonYogurt;
    let toppingCart;
    //   let yogurtCart: Yogurt;
    //let yogurtBase: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    let configDiv = document.getElementById("config");
    let clearButton = document.querySelector("button");
    clearButton.addEventListener("click", onClickClear);
    async function init(_event) {
        buildVisualisierung();
        await Freezer.communicate("toppings.json");
        await Freezer.communicate("yogurtbases.json");
        createHTMLElements();
        function createHTMLElements() {
            let formDiv = document.getElementById("formdiv");
            let firstName = document.createElement("input");
            formDiv.appendChild(firstName);
            firstName.setAttribute("class", "formular");
            firstName.setAttribute("id", "firstname");
            firstName.setAttribute("placeholder", "Vorname");
            firstName.setAttribute("name", "Vorname");
            let lastName = document.createElement("input");
            formDiv.appendChild(lastName);
            lastName.setAttribute("class", "formular");
            lastName.setAttribute("id", "lastname");
            lastName.setAttribute("placeholder", "Nachname");
            lastName.setAttribute("name", "Nachname");
            let streetName = document.createElement("input");
            formDiv.appendChild(streetName);
            streetName.setAttribute("class", "formular");
            streetName.setAttribute("id", "streetname");
            streetName.setAttribute("placeholder", "Straße und Hasunummer");
            streetName.setAttribute("name", "Straße");
            let cityName = document.createElement("input");
            formDiv.appendChild(cityName);
            cityName.setAttribute("class", "formular");
            cityName.setAttribute("id", "cityname");
            cityName.setAttribute("placeholder", "Wohnort");
            cityName.setAttribute("name", "Wohnort");
            let orderButton = document.createElement("button");
            formDiv.appendChild(orderButton).innerHTML = "Order!";
            orderButton.setAttribute("id", "orderbtn");
            orderButton.setAttribute("type", "submit");
            orderButton.setAttribute("value", "Bestellung abschicken");
            orderButton.addEventListener("click", sendOrder);
            let configBase = document.getElementById("base");
            for (let i = 0; i < Freezer.jsonObj.length; i++) {
                if (Freezer.jsonObj[i].category == "yogurt") {
                    let baseDiv = document.createElement("div");
                    baseDiv.setAttribute("class", "bases");
                    baseDiv.setAttribute("id", "base" + i);
                    baseDiv.addEventListener("click", handleBaseClick.bind(Freezer.jsonObj[i]));
                    configBase.appendChild(baseDiv);
                    let baseImg = document.createElement("img");
                    baseImg.setAttribute("src", (Freezer.jsonObj[i].bild));
                    baseImg.setAttribute("class", "baseImg");
                    baseImg.setAttribute("alt", "Lecker Frozen Yogurt");
                    baseDiv.appendChild(baseImg);
                    let baseName = document.createElement("h4");
                    baseName.setAttribute("class", "basename");
                    baseName.innerHTML = (Freezer.jsonObj)[i].name;
                    baseDiv.appendChild(baseName);
                    let basePreis = document.createElement("h5");
                    basePreis.setAttribute("class", "basepreis");
                    basePreis.innerHTML = (Freezer.jsonObj)[i].preis.toLocaleString() + "€";
                    baseDiv.appendChild(basePreis);
                }
                if (Freezer.jsonObj[i].category == "toppings") {
                    let toppingDiv = document.createElement("div");
                    toppingDiv.setAttribute("class", "topping");
                    toppingDiv.setAttribute("id", "topping" + i);
                    document.getElementById("toppingsammlung")?.appendChild(toppingDiv);
                    toppingDiv.addEventListener("click", handleToppingClick.bind(Freezer.jsonObj[i]));
                    let toppingImg = document.createElement("img");
                    toppingImg.setAttribute("class", "topping_img");
                    toppingImg.setAttribute("src", (Freezer.jsonObj)[i].bild);
                    toppingImg.setAttribute("alt", "Topping Vorschau");
                    document.getElementById("topping" + i)?.appendChild(toppingImg);
                    let toppingHeading = document.createElement("h4");
                    toppingHeading.setAttribute("class", "topping_h");
                    toppingHeading.innerHTML = (Freezer.jsonObj)[i].name;
                    document.getElementById("topping" + i)?.appendChild(toppingHeading);
                    let toppingPreis = document.createElement("h5");
                    toppingPreis.setAttribute("class", "topping_preis");
                    toppingPreis.innerHTML = (Freezer.jsonObj)[i].preis.toLocaleString() + "€";
                    document.getElementById("topping" + i)?.appendChild(toppingPreis);
                }
            }
        }
    }
    async function sendOrder(_click) {
        //let url: string = "http://localhost:8100";
        let url = "https://frozen-yogurt.herokuapp.com/";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "/bestellungen" + "?" + query.toString();
        let response = await fetch(url);
        localStorage.clear();
        let getToAdminLink = document.createElement("a");
        getToAdminLink.setAttribute("href", "https://vido-bit.github.io/GIS_01/Endaufgabe/admin.html");
        getToAdminLink.setAttribute("target", "_blank");
        getToAdminLink.style.fontSize = "30px";
        console.log(response);
        ;
    }
    function handleBaseClick(_click) {
        //let yogurtKey: string = <string>localStorage.key("category")
        //localStorage.removeItem("yogurt");
        /*    if (document.getElementsByClassName("yogurt")) {
                 localStorage.removeItem(this.category);
               //  location.reload();
             }
             else {
                 */
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let toppingKey = localStorage.key(i);
                let jsonString = localStorage.getItem(toppingKey);
                jsonYogurt = JSON.parse(jsonString);
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
    function handleToppingClick(_click) {
        if (document.getElementById(this.name)) {
            localStorage.removeItem(this.name);
            location.reload();
        }
        else {
            addTopping(this);
            buildVisualisierung();
        }
    }
    function chooseBaseFlavour(_yogurt) {
        let yogurtStorage = JSON.stringify(_yogurt);
        localStorage.setItem(_yogurt.category, yogurtStorage);
        console.log(localStorage);
        // console.log(JSON.stringify(_yogurt.name));
    }
    function addTopping(_topping) {
        /*  if (JSON.stringify(_topping)==toppingStorage)
          let toppingStorage: string = JSON.stringify(_topping);
          localStorage.setItem(_topping.name, toppingStorage);
          console.log(localStorage);
          console.log(JSON.stringify(_topping.name));
          configDiv.appendChild(toppingPlus);
          */
        let toppingStorage = JSON.stringify(_topping);
        localStorage.setItem(_topping.name, toppingStorage);
        //console.log(localStorage);
    }
    function buildVisualisierung() {
        for (let i = 0; i < localStorage.length; i++) {
            let toppingKey = localStorage.key(i);
            let jsonString = localStorage.getItem(toppingKey);
            toppingCart = JSON.parse(jsonString);
            if (toppingCart.category == "toppings") {
                let toppingPlus = document.createElement("img");
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
                let yogurtChoice = document.createElement("img");
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
    function onClickClear(_click) {
        localStorage.clear();
        location.reload();
    }
})(Freezer || (Freezer = {}));
//# sourceMappingURL=script.js.map