"use strict";
var Produkte;
(function (Produkte) {
    window.addEventListener("load", init);
    Produkte.jsonObj = [];
    let warenAnzahl = 0;
    let preisCounter = 0;
    let warenNr;
    async function init(_event) {
        await Produkte.communicate("products.json");
        warenNr = document.createElement("h5");
        document.getElementById("shopping-cart")?.appendChild(warenNr);
        let lifestyleKategorieDiv = document.querySelector(".lifestyle-kategorie");
        lifestyleKategorieDiv.addEventListener("click", handleCategoryClick.bind(lifestyleKategorieDiv));
        let hygieneKategorieDiv = document.querySelector(".hygiene-kategorie");
        hygieneKategorieDiv.addEventListener("click", handleCategoryClick.bind(hygieneKategorieDiv));
        //Produkte einschleifen
        for (let index = 0; index < Produkte.jsonObj.length; index++) {
            let newDiv = document.createElement("div");
            switch (Produkte.jsonObj[index].kategorie) {
                //Lifestyle-Kategorie
                case "lifestyle":
                    newDiv.setAttribute("class", "lifestyle-div");
                    newDiv.setAttribute("id", "lifestyle-produkt" + index);
                    document.getElementById("lifestyle")?.appendChild(newDiv);
                    //Produktbild hinzufügen
                    let lifeImg = document.createElement("img");
                    lifeImg.setAttribute("src", (Produkte.jsonObj)[index].img);
                    lifeImg.setAttribute("alt", "Lifestyle-Produkt");
                    lifeImg.setAttribute("class", "produktbild");
                    document.getElementById("lifestyle-produkt" + index)?.appendChild(lifeImg);
                    //Produktbezeichnung hinzufügen
                    let lifeH3 = document.createElement("h3");
                    lifeH3.innerHTML = (Produkte.jsonObj)[index].name;
                    document.getElementById("lifestyle-produkt" + index)?.appendChild(lifeH3);
                    //Produkt_beschreibung hinzufügen
                    let lifeP = document.createElement("p");
                    lifeP.innerHTML = (Produkte.jsonObj)[index].beschreibung;
                    document.getElementById("lifestyle-produkt" + index)?.appendChild(lifeP);
                    // Preis hinzufügen
                    let lifePreis = document.createElement("h4");
                    lifePreis.innerHTML = (Produkte.jsonObj)[index].preis.toFixed(2) + "€";
                    document.getElementById("lifestyle-produkt" + index)?.appendChild(lifePreis);
                    break;
                //Hygiene-Kategorie
                case "hygiene":
                    newDiv.setAttribute("class", "hygiene-div");
                    newDiv.setAttribute("id", "hygiene-produkt" + index);
                    document.getElementById("hygiene")?.appendChild(newDiv);
                    // Produktbild hinzufügen
                    let hygImg = document.createElement("img");
                    hygImg.setAttribute("src", (Produkte.jsonObj)[index].img);
                    hygImg.setAttribute("alt", "Hygiene-Produkt");
                    hygImg.setAttribute("class", "produktbild");
                    document.getElementById("hygiene-produkt" + index)?.appendChild(hygImg);
                    // Produktbezeichnung hinzufügen
                    let hygH3 = document.createElement("h3");
                    hygH3.innerHTML = (Produkte.jsonObj)[index].name;
                    document.getElementById("hygiene-produkt" + index)?.appendChild(hygH3);
                    // Produktbeschreibung hinzufügen
                    let hygP = document.createElement("p");
                    hygP.innerHTML = (Produkte.jsonObj)[index].beschreibung;
                    document.getElementById("hygiene-produkt" + index)?.appendChild(hygP);
                    let hygPreis = document.createElement("h4");
                    hygPreis.innerHTML = (Produkte.jsonObj)[index].preis.toFixed(2) + "€";
                    document.getElementById("hygiene-produkt" + index)?.appendChild(hygPreis);
                    break;
                default:
                    break;
            }
            //Button hinzufügen
            let newButton = document.createElement("button");
            newButton.innerHTML = "Jetzt kaufen";
            newButton.addEventListener("click", handleWarenkorbClick.bind(Produkte.jsonObj[index]));
            document.getElementById("lifestyle-produkt" + index)?.appendChild(newButton);
            document.getElementById("hygiene-produkt" + index)?.appendChild(newButton);
            newButton.setAttribute("name", Produkte.jsonObj[index].name);
        }
    }
    //Produkt in Warekorb legen
    async function putInCart(_produkt) {
        let cartContent = JSON.stringify(_produkt);
        localStorage.setItem(_produkt.name, cartContent);
        console.log(localStorage);
    }
    //Funktion des "Kaufen"-Buttons
    function handleWarenkorbClick(_click) {
        //Berechnung des Gesamt-Preises
        preisCounter += this.preis;
        console.log("Total: " + preisCounter.toFixed(2) + "€");
        //Berechnung der Artikelanzahl im Warenkorb
        warenAnzahl++;
        warenNr.innerHTML = (warenAnzahl).toString();
        //lege Item in Einkaufswagen
        putInCart(this);
    }
    //Ein-/Ausblenden der Produktkategorien
    function handleCategoryClick(_click) {
        switch (this.getAttribute("class")) {
            case "hygiene-kategorie":
                showHygiene();
                break;
            case "lifestyle-kategorie":
                showLifestyle();
                break;
        }
    }
    function showHygiene() {
        document.getElementById("hygiene").style.display = "inline-grid";
        document.getElementById("lifestyle").style.display = "none";
        document.getElementById("hygiene-button").style.background = "#960000";
        document.getElementById("lifestyle-button").style.background = "black";
    }
    function showLifestyle() {
        document.getElementById("hygiene").style.display = "none";
        document.getElementById("lifestyle").style.display = "inline-grid";
        document.getElementById("lifestyle-button").style.background = "#960000";
        document.getElementById("hygiene-button").style.background = "black";
    }
})(Produkte || (Produkte = {}));
//# sourceMappingURL=shop.js.map