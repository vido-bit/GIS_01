"use strict";
var Produkte;
(function (Produkte) {
    window.addEventListener("load", init);
    let warenAnzahl = 0;
    let preisCounter = 0;
    let warenNr;
    function init(_event) {
        loadProducts();
        warenNr = document.createElement("h5");
        document.getElementById("shopping-cart")?.appendChild(warenNr);
        let lifestyleKategorieDiv = document.querySelector(".lifestyle-kategorie");
        lifestyleKategorieDiv.addEventListener("click", handleCategoryClick.bind(lifestyleKategorieDiv));
        let hygieneKategorieDiv = document.querySelector(".hygiene-kategorie");
        hygieneKategorieDiv.addEventListener("click", handleCategoryClick.bind(hygieneKategorieDiv));
    }
    function loadProducts() {
        let shirt = {
            img: "lifestyle/la_shirt.png",
            name: "Shirt",
            beschreibung: "mit Siebdruck gedruckt",
            preis: 19.90,
            _kategorie: "lifestyle"
        };
        let socken = {
            img: "lifestyle/matp_socks.png",
            name: "Socken",
            beschreibung: "Für Flächen geeignet",
            preis: 9.90,
            _kategorie: "lifestyle"
        };
        let cap = {
            img: "lifestyle/amstercap.png",
            name: "Cap",
            beschreibung: "knallige Cap mit feinem Stick",
            preis: 29.90,
            _kategorie: "lifestyle"
        };
        let spraydose = {
            img: "lifestyle/la_spraydose.png",
            name: "Spraydose",
            beschreibung: "color: #960000;",
            preis: 9.90,
            _kategorie: "lifestyle"
        };
        let clipper = {
            img: "lifestyle/la_clipper.jpg",
            name: "Clipper",
            beschreibung: "Zum Feuer machen als auch zum Stopfen",
            preis: 4.90,
            _kategorie: "lifestyle"
        };
        let boxershorts = {
            img: "lifestyle/boxershorts.png",
            name: "Boxershorts",
            beschreibung: "Mit Flachleg-Garantie",
            preis: 9.90,
            _kategorie: "lifestyle"
        };
        let desinfektionstuecher = {
            img: "hygiene/desinfektionstuecher.jpg",
            name: "Desinfektionstücher",
            beschreibung: "Für Flächen geeignet",
            preis: 49.90,
            _kategorie: "hygiene"
        };
        let haendeDesinfektion = {
            img: "hygiene/desinfektions_la.jpg",
            name: "Hände Desinfektionsmittel",
            beschreibung: "Bitte Hinweis beachten: Dieses Produkt ist für Profis",
            preis: 99.90,
            _kategorie: "hygiene"
        };
        let mundNasenschutz = {
            img: "hygiene/amstermask.jpg",
            name: "Mund- Nasenschutz",
            beschreibung: "Mund- Nasenschutz im stylischen Amsterdam-Look. Ein echter Hingucker!",
            preis: 9.90,
            _kategorie: "hygiene"
        };
        let faceShield = {
            img: "hygiene/faceshield.jpg",
            name: "Faceshield",
            beschreibung: "Besonders wirksam gegen Corona-Viren",
            preis: 49.90,
            _kategorie: "hygiene"
        };
        let abcmaske = {
            img: "hygiene/la_maske.jpg",
            name: "ABC Maske",
            beschreibung: "Diese Maske ist äußerst effektiv!",
            preis: 299.90,
            _kategorie: "hygiene"
        };
        let zahnbuerste = {
            img: "hygiene/la_zahnbuerste.jpg",
            name: "Zahnbürste inkl. Halter",
            beschreibung: "Diese Zahnbürste besteht zu über 90% aus nachhaltigem Bambus und kommt mit nützlichem Halter sowie stylischem xxx-Print",
            preis: 9.90,
            _kategorie: "hygiene"
        };
        let schnelltest = {
            img: "hygiene/schnelltest.jpg",
            name: "Corona Schnelltest",
            beschreibung: "...auch als Schwangerschaftstest verwendbar",
            preis: 29.90,
            _kategorie: "hygiene"
        };
        let schutzbrille = {
            img: "hygiene/schutzbrille.jpg",
            name: "Schutzbrille",
            beschreibung: "Schützt die Augen vor Kleinteilen, Sägespänne, Glutfunken, Sperma und <b>Corona!</b>",
            preis: 19.90,
            _kategorie: "hygiene"
        };
        let schutzanzug = {
            img: "hygiene/matprotectivesuit.jpg",
            name: "Schutzanzug",
            beschreibung: "Der MATProtectiveSuit(TradeMark) ist fürs Übherleben entwickelt",
            preis: 499.90,
            _kategorie: "hygiene"
        };
        let longsleeve = {
            img: "lifestyle/la_kleidung.png",
            name: "Longsleeve",
            beschreibung: "Zum Feuer machen als auch zum Stopfen",
            preis: 29.90,
            _kategorie: "lifestyle"
        };
        let weihnachtspulli = {
            img: "lifestyle/la_weihnachtspulli.jpg",
            name: "Weihnachtspulli",
            beschreibung: "Für jede Jahreszeit",
            preis: 39.90,
            _kategorie: "lifestyle"
        };
        let produkte = [shirt, cap, socken, spraydose, clipper, boxershorts, longsleeve, weihnachtspulli, desinfektionstuecher, haendeDesinfektion, mundNasenschutz, faceShield, abcmaske, zahnbuerste, schnelltest, schutzbrille, schutzanzug];
        //Produkte einschleifen
        for (let _index = 0; _index < produkte.length; _index++) {
            switch (produkte[_index]._kategorie) {
                //Lifestyle-Kategorie
                case "lifestyle":
                    let _lifeDiv = document.createElement("div");
                    _lifeDiv.setAttribute("class", "lifestyle-div");
                    _lifeDiv.setAttribute("id", "lifestyle-produkt" + _index);
                    document.getElementById("lifestyle")?.appendChild(_lifeDiv);
                    //Produktbild hinzufügen
                    let _lifeImg = document.createElement("img");
                    _lifeImg.setAttribute("src", produkte[_index].img);
                    _lifeImg.setAttribute("alt", "Lifestyle-Produkt");
                    _lifeImg.setAttribute("class", "produktbild");
                    document.getElementById("lifestyle-produkt" + _index)?.appendChild(_lifeImg);
                    //Produktbezeichnung hinzufügen
                    let _lifeH3 = document.createElement("h3");
                    _lifeH3.innerHTML = produkte[_index].name;
                    document.getElementById("lifestyle-produkt" + _index)?.appendChild(_lifeH3);
                    //Produkt_beschreibung hinzufügen
                    let _lifeP = document.createElement("p");
                    _lifeP.innerHTML = produkte[_index].beschreibung;
                    document.getElementById("lifestyle-produkt" + _index)?.appendChild(_lifeP);
                    // Preis hinzufügen
                    let _lifePreis = document.createElement("h4");
                    _lifePreis.innerHTML = produkte[_index].preis.toFixed(2) + "€";
                    document.getElementById("lifestyle-produkt" + _index)?.appendChild(_lifePreis);
                    break;
                //Hygiene-Kategorie
                case "hygiene":
                    let _hygDiv = document.createElement("div");
                    _hygDiv.setAttribute("class", "hygiene-div");
                    _hygDiv.setAttribute("id", "hygiene-produkt" + _index);
                    document.getElementById("hygiene")?.appendChild(_hygDiv);
                    // Produktbild hinzufügen
                    let _hygImg = document.createElement("img");
                    _hygImg.setAttribute("src", produkte[_index].img);
                    _hygImg.setAttribute("alt", "Hygiene-Produkt");
                    _hygImg.setAttribute("class", "produktbild");
                    document.getElementById("hygiene-produkt" + _index)?.appendChild(_hygImg);
                    // Produktbezeichnung hinzufügen
                    let _hygH3 = document.createElement("h3");
                    _hygH3.innerHTML = produkte[_index].name;
                    document.getElementById("hygiene-produkt" + _index)?.appendChild(_hygH3);
                    // Produktbeschreibung hinzufügen
                    let _hygP = document.createElement("p");
                    _hygP.innerHTML = produkte[_index].beschreibung;
                    document.getElementById("hygiene-produkt" + _index)?.appendChild(_hygP);
                    let _hygPreis = document.createElement("h4");
                    _hygPreis.innerHTML = produkte[_index].preis.toFixed(2) + "€";
                    document.getElementById("hygiene-produkt" + _index)?.appendChild(_hygPreis);
                    break;
                default:
                    break;
            }
            //Button hinzufügen
            let newButton = document.createElement("button");
            newButton.innerHTML = "Jetzt kaufen";
            newButton.addEventListener("click", handleWarenkorbClick.bind(produkte[_index]));
            document.getElementById("lifestyle-produkt" + _index)?.appendChild(newButton);
            document.getElementById("hygiene-produkt" + _index)?.appendChild(newButton);
        }
    }
    function handleWarenkorbClick(_click) {
        warenAnzahl++;
        console.log(warenAnzahl);
        preisCounter += this.preis;
        console.log(preisCounter.toFixed(2) + "€");
        warenNr.innerHTML = (warenAnzahl).toString();
        console.log(warenNr.toString());
    }
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
    /*
    function showHygiene(){
        document.getElementById("hygiene")?.setAttribute("display", "inline-grid");
        document.getElementById("lifestyle")?.setAttribute("display", "none");
    }
    function showLifestyle(){
        document.getElementById("hygiene")?.setAttribute("display", "none");
        document.getElementById("lifestyle")?.setAttribute("display", "inline-grid");
    }
    */
})(Produkte || (Produkte = {}));
//# sourceMappingURL=script.js.map