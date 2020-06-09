namespace Produkte {

    interface Produkt {
        img: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }
    let shirt: Produkt = {
        img: "lifestyle/la_shirt.png",
        name: "Shirt",
        beschreibung: "mit Siebdruck gedruckt",
        preis: 19.90,
        kategorie: "lifestyle"
    };

    let socken: Produkt = {
        img: "lifestyle/matp_socks.png",
        name: "Socken",
        beschreibung: "Für Flächen geeignet",
        preis: 9.90,
        kategorie: "lifestyle"
    };

    let cap: Produkt = {
        img: "lifestyle/amstercap.png",
        name: "Cap",
        beschreibung: "knallige Cap mit feinem Stick",
        preis: 29.90,
        kategorie: "lifestyle"
    };

    let spraydose: Produkt = {
        img: "lifestyle/la_spraydose.png",
        name: "Spraydose",
        beschreibung: "color: #960000;",
        preis: 9.90,
        kategorie: "lifestyle"
    };

    let clipper: Produkt = {
        img: "lifestyle/la_clipper.jpg",
        name: "Clipper",
        beschreibung: "Zum Feuer machen als auch zum Stopfen",
        preis: 4.90,
        kategorie: "lifestyle"
    };

    let boxershorts: Produkt = {
        img: "lifestyle/boxershorts.png",
        name: "Boxershorts",
        beschreibung: "Mit Flachleg-Garantie",
        preis: 9.90,
        kategorie: "lifestyle"
    };

    let desinfektionstuecher: Produkt = {
        img: "hygiene/desinfektionstuecher.jpg",
        name: "Desinfektionstücher",
        beschreibung: "Für Flächen geeignet",
        preis: 49.90,
        kategorie: "hygiene"
    };

    let haendeDesinfektion: Produkt = {
        img: "hygiene/desinfektions_la.jpg",
        name: "Hände Desinfektionsmittel",
        beschreibung: "Bitte Hinweis beachten: Dieses Produkt ist für Profis",
        preis: 99.90,
        kategorie: "hygiene"
    };

    let mundNasenschutz: Produkt = {
        img: "hygiene/amstermask.jpg",
        name: "Mund- Nasenschutz",
        beschreibung: "Mund- Nasenschutz im stylischen Amsterdam-Look. Ein echter Hingucker!",
        preis: 9.90,
        kategorie: "hygiene"
    };

    let faceShield: Produkt = {
        img: "hygiene/faceshield.jpg",
        name: "Faceshield",
        beschreibung: "Besonders wirksam gegen Corona-Viren",
        preis: 49.90,
        kategorie: "hygiene"
    };

    let abcmaske: Produkt = {
        img: "hygiene/la_maske.jpg",
        name: "ABC Maske",
        beschreibung: "Diese Maske ist äußerst effektiv!",
        preis: 299.90,
        kategorie: "hygiene"
    };

    let zahnbuerste: Produkt = {
        img: "hygiene/la_zahnbuerste.jpg",
        name: "Zahnbürste inkl. Halter",
        beschreibung: "Diese Zahnbürste besteht zu über 90% aus nachhaltigem Bambus und kommt mit nützlichem Halter sowie stylischem xxx-Print",
        preis: 9.90,
        kategorie: "hygiene"
    };

    let schnelltest: Produkt = {
        img: "hygiene/schnelltest.jpg",
        name: "Corona Schnelltest",
        beschreibung: "...auch als Schwangerschaftstest verwendbar",
        preis: 29.90,
        kategorie: "hygiene"
    };

    let schutzbrille: Produkt = {
        img: "hygiene/schutzbrille.jpg",
        name: "Schutzbrille",
        beschreibung: "Schützt die Augen vor Kleinteilen, Sägespänne, Glutfunken, Sperma und <b>Corona!</b>",
        preis: 19.90,
        kategorie: "hygiene"
    };

    let schutzanzug: Produkt = {
        img: "hygiene/matprotectivesuit.jpg",
        name: "Schutzanzug",
        beschreibung: "Der MATProtectiveSuit(TradeMark) ist fürs Übherleben entwickelt",
        preis: 499.90,
        kategorie: "hygiene"
    };
    let longsleeve: Produkt = {
        img: "lifestyle/la_kleidung.png",
        name: "Longsleeve",
        beschreibung: "Zum Feuer machen als auch zum Stopfen",
        preis: 29.90,
        kategorie: "lifestyle"
    };

    let weihnachtspulli: Produkt = {
        img: "lifestyle/la_weihnachtspulli.jpg",
        name: "Weihnachtspulli",
        beschreibung: "Für jede Jahreszeit",
        preis: 39.90,
        kategorie: "lifestyle"
    };

    export let produkte: Produkt[] = [shirt, cap, socken, spraydose, clipper, boxershorts, longsleeve, weihnachtspulli, desinfektionstuecher, haendeDesinfektion, mundNasenschutz, faceShield, abcmaske, zahnbuerste, schnelltest, schutzbrille, schutzanzug];
}
