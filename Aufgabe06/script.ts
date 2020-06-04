namespace Produkte {
    interface Produkt {
        img: string;
        name: string;
        _beschreibung: string;
        _preis: number;
        _kategorie: string;
    }
    let shirt: Produkt = {
        img: "lifestyle/la_shirt.png",
        name: "Shirt",
        _beschreibung: "mit Siebdruck gedruckt",
        _preis: 19.90,
        _kategorie: "lifestyle"
    };

    let socken: Produkt = {
        img: "lifestyle/matp_socks.png",
        name: "Socken",
        _beschreibung: "Für Flächen geeignet",
        _preis: 9.90,
        _kategorie: "lifestyle"
    };

    let cap: Produkt = {
        img: "lifestyle/amstercap.png",
        name: "Cap",
        _beschreibung: "knallige Cap mit feinem Stick",
        _preis: 29.90,
        _kategorie: "lifestyle"
    };

    let spraydose: Produkt = {
        img: "lifestyle/la_spraydose.png",
        name: "Spraydose",
        _beschreibung: "color: #960000;",
        _preis: 9.90,
        _kategorie: "lifestyle"
    };

    let clipper: Produkt = {
        img: "lifestyle/la_clipper.jpg",
        name: "Clipper",
        _beschreibung: "Zum Feuer machen als auch zum Stopfen",
        _preis: 4.90,
        _kategorie: "lifestyle"
    };

    let boxershorts: Produkt = {
        img: "lifestyle/boxershorts.png",
        name: "Boxershorts",
        _beschreibung: "Mit Flachleg-Garantie",
        _preis: 9.90,
        _kategorie: "lifestyle"
    };

    let desinfektionstuecher: Produkt = {
        img: "hygiene/desinfektionstuecher.jpg",
        name: "Desinfektionstücher",
        _beschreibung: "Für Flächen geeignet",
        _preis: 49.90,
        _kategorie: "hygiene"
    };

    let haendeDesinfektion: Produkt = {
        img: "hygiene/desinfektions_la.jpg",
        name: "Hände Desinfektionsmittel",
        _beschreibung: "Bitte Hinweis beachten: Dieses Produkt ist für Profis",
        _preis: 99.90,
        _kategorie: "hygiene"
    };

    let mundNasenschutz: Produkt = {
        img: "hygiene/amstermask.jpg",
        name: "Mund- Nasenschutz",
        _beschreibung: "Mund- Nasenschutz im stylischen Amsterdam-Look. Ein echter Hingucker!",
        _preis: 9.90,
        _kategorie: "hygiene"
    };

    let faceShield: Produkt = {
        img: "hygiene/faceshield.jpg",
        name: "Faceshield",
        _beschreibung: "Besonders wirksam gegen Corona-Viren",
        _preis: 49.90,
        _kategorie: "hygiene"
    };

    let abcmaske: Produkt = {
        img: "hygiene/la_maske.jpg",
        name: "ABC Maske",
        _beschreibung: "Diese Maske ist äußerst effektiv!",
        _preis: 299.90,
        _kategorie: "hygiene"
    };

    let zahnbuerste: Produkt = {
        img: "hygiene/la_zahnbuerste.jpg",
        name: "Zahnbürste inkl. Halter",
        _beschreibung: "Diese Zahnbürste besteht zu über 90% aus nachhaltigem Bambus und kommt mit nützlichem Halter sowie stylischem xxx-Print",
        _preis: 9.90,
        _kategorie: "hygiene"
    };

    let schnelltest: Produkt = {
        img: "hygiene/schnelltest.jpg",
        name: "Corona Schnelltest",
        _beschreibung: "...auch als Schwangerschaftstest verwendbar",
        _preis: 29.90,
        _kategorie: "hygiene"
    };

    let schutzbrille: Produkt = {
        img: "hygiene/schutzbrille.jpg",
        name: "Schutzbrille",
        _beschreibung: "Schützt die Augen vor Kleinteilen, Sägespänne, Glutfunken, Sperma und <b>Corona!</b>",
        _preis: 19.90,
        _kategorie: "hygiene"
    };

    let schutzanzug: Produkt = {
        img: "hygiene/matprotectivesuit.jpg",
        name: "Schutzanzug",
        _beschreibung: "Der MATProtectiveSuit(TradeMark) ist fürs Übherleben entwickelt",
        _preis: 499.90,
        _kategorie: "hygiene"
    };
    let longsleeve: Produkt = {
        img: "lifestyle/la_kleidung.png",
        name: "Longsleeve",
        _beschreibung: "Zum Feuer machen als auch zum Stopfen",
        _preis: 29.90,
        _kategorie: "lifestyle"
    };

    let weihnachtspulli: Produkt = {
        img: "lifestyle/la_weihnachtspulli.jpg",
        name: "Weihnachtspulli",
        _beschreibung: "Für jede Jahreszeit",
        _preis: 39.90,
        _kategorie: "lifestyle"
    };

    let produkte: Produkt[] = [shirt, cap, socken, spraydose, clipper, boxershorts, longsleeve, weihnachtspulli, desinfektionstuecher, haendeDesinfektion, mundNasenschutz, faceShield, abcmaske, zahnbuerste, schnelltest, schutzbrille, schutzanzug];

    //Produkte einschleifen
    for (let _index: number = 0; _index < produkte.length; _index++) {

        switch (produkte[_index]._kategorie) {
            //Lifestyle-Kategorie
            case "lifestyle":
                let _lifeDiv: HTMLDivElement = document.createElement("div");
                _lifeDiv.setAttribute("class", "lifestyle-div");
                _lifeDiv.setAttribute("id", "lifestyle-produkt" + _index);
                document.getElementById("lifestyle")?.appendChild(_lifeDiv);
                //Produktbild hinzufügen
                let _lifeImg: HTMLElement = document.createElement("img");
                _lifeImg.setAttribute("src", produkte[_index].img);
                _lifeImg.setAttribute("alt", "Lifestyle-Produkt");
                _lifeImg.setAttribute("class", "produktbild");
                document.getElementById("lifestyle-produkt" + _index)?.appendChild(_lifeImg);
                //Produktbezeichnung hinzufügen
                let _lifeH3: HTMLHeadingElement = document.createElement("h3");
                _lifeH3.innerHTML = produkte[_index].name;
                document.getElementById("lifestyle-produkt" + _index)?.appendChild(_lifeH3);
                //Produkt_beschreibung hinzufügen
                let _lifeP: HTMLParagraphElement = document.createElement("p");
                _lifeP.innerHTML = produkte[_index]._beschreibung;
                document.getElementById("lifestyle-produkt" + _index)?.appendChild(_lifeP);
                // Preis hinzufügen
                let _lifePreis: HTMLHeadingElement = document.createElement("h4");
                _lifePreis.innerHTML = produkte[_index]._preis.toFixed(2) + "€";
                document.getElementById("lifestyle-produkt" + _index)?.appendChild(_lifePreis);
                break;
            //Hygiene-Kategorie
            case "hygiene":
                let _hygDiv: HTMLDivElement = document.createElement("div");
                _hygDiv.setAttribute("class", "hygiene-div");
                _hygDiv.setAttribute("id", "hygiene-produkt" + _index);
                document.getElementById("hygiene")?.appendChild(_hygDiv);
                // Produktbild hinzufügen
                let _hygImg: HTMLElement = document.createElement("img");
                _hygImg.setAttribute("src", produkte[_index].img);
                _hygImg.setAttribute("alt", "Hygiene-Produkt");
                _hygImg.setAttribute("class", "produktbild");
                document.getElementById("hygiene-produkt" + _index)?.appendChild(_hygImg);
                // Produktbezeichnung hinzufügen
                let _hygH3: HTMLHeadingElement = document.createElement("h3");
                _hygH3.innerHTML = produkte[_index].name;
                document.getElementById("hygiene-produkt" + _index)?.appendChild(_hygH3);
                // Produktbeschreibung hinzufügen
                let _hygP: HTMLParagraphElement = document.createElement("p");
                _hygP.innerHTML = produkte[_index]._beschreibung;
                document.getElementById("hygiene-produkt" + _index)?.appendChild(_hygP);
                let _hygPreis: HTMLHeadingElement = document.createElement("h4");
                _hygPreis.innerHTML = produkte[_index]._preis.toFixed(2) + "€";
                document.getElementById("hygiene-produkt" + _index)?.appendChild(_hygPreis);
                break;
            default:
                break;
        }
        //Button hinzufügen
        let newButton: HTMLButtonElement = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        newButton.addEventListener("click", handleWarenkorbClick);
        document.getElementById("lifestyle-produkt" + _index)?.appendChild(newButton);
        document.getElementById("hygiene-produkt" + _index)?.appendChild(newButton);
    }

}

function showHygiene(): void {
    (<HTMLElement>document.getElementById("hygiene")).style.display = "inline-grid";
    (<HTMLElement>document.getElementById("lifestyle")).style.display = "none";
    (<HTMLElement>document.getElementById("hygiene-button")).style.background = "#960000";
    (<HTMLElement>document.getElementById("lifestyle-button")).style.background = "black";
}

function showLifestyle(): void {
    (<HTMLElement>document.getElementById("hygiene")).style.display = "none";
    (<HTMLElement>document.getElementById("lifestyle")).style.display = "inline-grid";
    (<HTMLElement>document.getElementById("lifestyle-button")).style.background = "#960000";
    (<HTMLElement>document.getElementById("hygiene-button")).style.background = "black";
}


//document.querySelector("button").addEventListener("click", inWarenkorb);

let warenAnzahl: number = 0;

function handleWarenkorbClick(_click: MouseEvent): void { 
    console.log("Kliiick!");
  /*  let warenNr: HTMLHeadingElement = document.createElement("h5");
    warenNr.innerHTML = (warenAnzahl + 1).toString()
    document.getElementById("shopping-cart")?.appendChild(warenNr);
    console.log(warenNr.toString());
*/
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