"use strict";
var Produkte;
(function (Produkte) {
    let shirt = {
        _img: "lifestyle/la_shirt.png",
        _name: "Shirt",
        _beschreibung: "mit Siebdruck gedruckt",
        _preis: 19.90
    };
    let socken = {
        _img: "lifestyle/matp_socks.png",
        _name: "Socken",
        _beschreibung: "Für Flächen geeignet",
        _preis: 9.90
    };
    let cap = {
        _img: "lifestyle/amstercap.png",
        _name: "Cap",
        _beschreibung: "knallige Cap mit feinem Stick",
        _preis: 29.90
    };
    let spraydose = {
        _img: "lifestyle/la_spraydose.png",
        _name: "Spraydose",
        _beschreibung: "color: #960000;",
        _preis: 9.90
    };
    let clipper = {
        _img: "lifestyle/la_clipper.jpg",
        _name: "Clipper",
        _beschreibung: "Zum Feuer machen als auch zum Stopfen",
        _preis: 4.90
    };
    let boxershorts = {
        _img: "lifestyle/boxershorts.png",
        _name: "Boxershorts",
        _beschreibung: "Mit Flachleg-Garantie",
        _preis: 9.90
    };
    let desinfektionstuecher = {
        _img: "hygiene/desinfektionstuecher.jpg",
        _name: "Desinfektionstücher",
        _beschreibung: "Für Flächen geeignet",
        _preis: 49.90
    };
    let haendeDesinfektion = {
        _img: "hygiene/desinfektions_la.jpg",
        _name: "Hände Desinfektionsmittel",
        _beschreibung: "Bitte Hinweis beachten: Dieses Produkt ist für Profis",
        _preis: 99.90
    };
    let mundNasenschutz = {
        _img: "hygiene/amstermask.jpg",
        _name: "Mund- Nasenschutz",
        _beschreibung: "Mund- Nasenschutz im stylischen Amsterdam-Look. Ein echter Hingucker!",
        _preis: 9.90
    };
    let faceShield = {
        _img: "hygiene/faceshield.jpg",
        _name: "Faceshield",
        _beschreibung: "Besonders wirksam gegen Corona-Viren",
        _preis: 49.90
    };
    let abcmaske = {
        _img: "hygiene/la_maske.jpg",
        _name: "ABC Maske",
        _beschreibung: "Diese Maske ist äußerst effektiv!",
        _preis: 299.90
    };
    let zahnbuerste = {
        _img: "hygiene/la_zahnbuerste.jpg",
        _name: "Zahnbürste inkl. Halter",
        _beschreibung: "Diese Zahnbürste besteht zu über 90% aus nachhaltigem Bambus und kommt mit nützlichem Halter sowie stylischem xxx-Print",
        _preis: 9.90
    };
    let schnelltest = {
        _img: "hygiene/schnelltest.jpg",
        _name: "Corona Schnelltest",
        _beschreibung: "...auch als Schwangerschaftstest verwendbar",
        _preis: 29.90
    };
    let schutzbrille = {
        _img: "hygiene/schutzbrille.jpg",
        _name: "Schutzbrille",
        _beschreibung: "Schützt die Augen vor Kleinteilen, Sägespänne, Glutfunken, Sperma und <b>Corona!</b>",
        _preis: 19.90
    };
    let schutzanzug = {
        _img: "hygiene/matprotectivesuit.jpg",
        _name: "Schutzanzug",
        _beschreibung: "Der MATProtectiveSuit(TradeMark) ist fürs Übherleben entwickelt",
        _preis: 499.90
    };
    let longsleeve = {
        _img: "lifestyle/la_kleidung.png",
        _name: "Longsleeve",
        _beschreibung: "Zum Feuer machen als auch zum Stopfen",
        _preis: 29.90
    };
    let weihnachtspulli = {
        _img: "lifestyle/la_weihnachtspulli.jpg",
        _name: "Weihnachtspulli",
        _beschreibung: "Für jede Jahreszeit",
        _preis: 39.90
    };
    let lifestyleProdukte = [shirt, cap, socken, spraydose, clipper, boxershorts, longsleeve, weihnachtspulli];
    let hygieneProdukte = [desinfektionstuecher, haendeDesinfektion, mundNasenschutz, faceShield, abcmaske, zahnbuerste, schnelltest, schutzbrille, schutzanzug];
    //Produkte einschleifen
    for (let _index = 0; _index < hygieneProdukte.length; _index++) {
        //Div erzeugen
        let _lifeDiv = document.createElement("div");
        _lifeDiv.setAttribute("class", "lifestyle-div");
        _lifeDiv.setAttribute("id", "lifestyle-produkt" + _index);
        document.getElementById("lifestyle")?.appendChild(_lifeDiv);
        let _hygDiv = document.createElement("div");
        _hygDiv.setAttribute("class", "hygiene-div");
        _hygDiv.setAttribute("id", "hygiene-produkt" + _index);
        document.getElementById("hygiene")?.appendChild(_hygDiv);
        //Produktbild hinzufügen
        let _lifeImg = document.createElement("img");
        _lifeImg.setAttribute("src", lifestyleProdukte[_index]._img);
        _lifeImg.setAttribute("alt", "Lifestyle-Produkt");
        _lifeImg.setAttribute("class", "produktbild");
        document.getElementById("lifestyle-produkt" + _index)?.appendChild(_lifeImg);
        let _hygImg = document.createElement("img");
        _hygImg.setAttribute("src", hygieneProdukte[_index]._img);
        _hygImg.setAttribute("alt", "Hygiene-Produkt");
        _hygImg.setAttribute("class", "produktbild");
        document.getElementById("hygiene-produkt" + _index)?.appendChild(_hygImg);
        //Produktbezeichnung hinzufügen
        let _lifeH3 = document.createElement("h3");
        _lifeH3.innerHTML = lifestyleProdukte[_index]._name;
        document.getElementById("lifestyle-produkt" + _index)?.appendChild(_lifeH3);
        let _hygH3 = document.createElement("h3");
        _hygH3.innerHTML = hygieneProdukte[_index]._name;
        document.getElementById("hygiene-produkt" + _index)?.appendChild(_hygH3);
        //Produkt_beschreibung hinzufügen
        let _lifeP = document.createElement("p");
        _lifeP.innerHTML = lifestyleProdukte[_index]._beschreibung;
        document.getElementById("lifestyle-produkt" + _index)?.appendChild(_lifeP);
        let _hygP = document.createElement("p");
        _hygP.innerHTML = hygieneProdukte[_index]._beschreibung;
        document.getElementById("hygiene-produkt" + _index)?.appendChild(_hygP);
        // _preis hinzufügen
        let _lifePreis = document.createElement("h4");
        _lifePreis.innerHTML = lifestyleProdukte[_index]._preis + "€";
        document.getElementById("lifestyle-produkt" + _index)?.appendChild(_lifePreis);
        let _hygPreis = document.createElement("h4");
        _hygPreis.innerHTML = hygieneProdukte[_index]._preis + "€";
        document.getElementById("hygiene-produkt" + _index)?.appendChild(_hygPreis);
        //Button hinzufügen
        let _newButton = document.createElement("button");
        _newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("lifestyle-produkt" + _index)?.appendChild(_newButton);
        document.getElementById("hygiene-produkt" + _index)?.appendChild(_newButton);
    }
})(Produkte || (Produkte = {}));

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
//# sourceMappingURL=script.js.map