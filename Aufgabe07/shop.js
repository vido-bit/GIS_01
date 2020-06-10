"use strict";
var Produkte;
(function (Produkte) {
    window.addEventListener("load", init);
    let warenAnzahl = 0;
    let preisCounter = 0;
    let warenNr;
    function init(_event) {
        warenNr = document.createElement("h5");
        document.getElementById("shopping-cart")?.appendChild(warenNr);
        let lifestyleKategorieDiv = document.querySelector(".lifestyle-kategorie");
        lifestyleKategorieDiv.addEventListener("click", handleCategoryClick.bind(lifestyleKategorieDiv));
        let hygieneKategorieDiv = document.querySelector(".hygiene-kategorie");
        hygieneKategorieDiv.addEventListener("click", handleCategoryClick.bind(hygieneKategorieDiv));
        //Produkte einschleifen
        for (let index = 0; index < Produkte.jsonObj.length; index++) {
            switch (Produkte.jsonObj[index].kategorie) {
                //Lifestyle-Kategorie
                case "lifestyle":
                    let lifeDiv = document.createElement("div");
                    lifeDiv.setAttribute("class", "lifestyle-div");
                    lifeDiv.setAttribute("id", "lifestyle-produkt" + index);
                    document.getElementById("lifestyle")?.appendChild(lifeDiv);
                    //Produktbild hinzufügen
                    let lifeImg = document.createElement("img");
                    lifeImg.setAttribute("src", JSON.parse(Produkte.jsonObj)[index].img);
                    lifeImg.setAttribute("alt", "Lifestyle-Produkt");
                    lifeImg.setAttribute("class", "produktbild");
                    document.getElementById("lifestyle-produkt" + index)?.appendChild(lifeImg);
                    //Produktbezeichnung hinzufügen
                    let lifeH3 = document.createElement("h3");
                    lifeH3.innerHTML = JSON.parse(myJSONprodukte)[index].name;
                    document.getElementById("lifestyle-produkt" + index)?.appendChild(lifeH3);
                    //Produkt_beschreibung hinzufügen
                    let lifeP = document.createElement("p");
                    lifeP.innerHTML = JSON.parse(myJSONprodukte)[index].beschreibung;
                    document.getElementById("lifestyle-produkt" + index)?.appendChild(lifeP);
                    // Preis hinzufügen
                    let lifePreis = document.createElement("h4");
                    lifePreis.innerHTML = JSON.parse(myJSONprodukte)[index].preis.toFixed(2) + "€";
                    document.getElementById("lifestyle-produkt" + index)?.appendChild(lifePreis);
                    break;
                //Hygiene-Kategorie
                case "hygiene":
                    let hygDiv = document.createElement("div");
                    hygDiv.setAttribute("class", "hygiene-div");
                    hygDiv.setAttribute("id", "hygiene-produkt" + index);
                    document.getElementById("hygiene")?.appendChild(hygDiv);
                    // Produktbild hinzufügen
                    let hygImg = document.createElement("img");
                    hygImg.setAttribute("src", JSON.parse(myJSONprodukte)[index].img);
                    hygImg.setAttribute("alt", "Hygiene-Produkt");
                    hygImg.setAttribute("class", "produktbild");
                    document.getElementById("hygiene-produkt" + index)?.appendChild(hygImg);
                    // Produktbezeichnung hinzufügen
                    let hygH3 = document.createElement("h3");
                    hygH3.innerHTML = JSON.parse(myJSONprodukte)[index].name;
                    document.getElementById("hygiene-produkt" + index)?.appendChild(hygH3);
                    // Produktbeschreibung hinzufügen
                    let hygP = document.createElement("p");
                    hygP.innerHTML = JSON.parse(myJSONprodukte)[index].beschreibung;
                    document.getElementById("hygiene-produkt" + index)?.appendChild(hygP);
                    let hygPreis = document.createElement("h4");
                    hygPreis.innerHTML = JSON.parse(myJSONprodukte)[index].preis.toFixed(2) + "€";
                    document.getElementById("hygiene-produkt" + index)?.appendChild(hygPreis);
                    break;
                default:
                    break;
            }
            //Button hinzufügen
            let newButton = document.createElement("button");
            newButton.innerHTML = "Jetzt kaufen";
            //hygDiv.appendChild(newButton).innerHTML = "in den Warenkorb";
            newButton.addEventListener("click", handleWarenkorbClick.bind(JSON.parse(myJSONprodukte)[index]));
            document.getElementById("lifestyle-produkt" + index)?.appendChild(newButton);
            document.getElementById("hygiene-produkt" + index)?.appendChild(newButton);
        }
    }
    //Funktion des "Kaufen"-Buttons
    function handleWarenkorbClick(_click) {
        //Berechnung des Gesamt-Preises
        preisCounter += this.preis;
        console.log("Total: " + preisCounter.toFixed(2) + "€");
        //Berechnung der Artikelanzahl im Warenkorb
        warenAnzahl++;
        warenNr.innerHTML = (warenAnzahl).toString();
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
    //document.querySelector("button").addEventListener("click", inWarenkorb);
})(Produkte || (Produkte = {}));
//# sourceMappingURL=shop.js.map