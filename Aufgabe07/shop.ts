namespace Produkte {

    window.addEventListener("load", init);

    let warenAnzahl: number = 0;
    let preisCounter: number = 0;
    let warenNr: HTMLHeadingElement;

    async function init(_event: Event): Promise<void> {
        await communicate("products.json");
        warenNr = document.createElement("h5");
        document.getElementById("shopping-cart")?.appendChild(warenNr);

        let lifestyleKategorieDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".lifestyle-kategorie");
        lifestyleKategorieDiv.addEventListener("click", handleCategoryClick.bind(lifestyleKategorieDiv));
        let hygieneKategorieDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".hygiene-kategorie");
        hygieneKategorieDiv.addEventListener("click", handleCategoryClick.bind(hygieneKategorieDiv));

        //Produkte einschleifen
        for (let index: number = 0; index < jsonObj.length; index++) {

            let newDiv: HTMLDivElement = document.createElement("div");
            switch (jsonObj[index].kategorie) {
                //Lifestyle-Kategorie
                case "lifestyle":
                    newDiv.setAttribute("class", "lifestyle-div");
                    newDiv.setAttribute("id", "lifestyle-produkt" + index);
                    document.getElementById("lifestyle")?.appendChild(newDiv);
                    //Produktbild hinzufügen
                    let lifeImg: HTMLElement = document.createElement("img");
                    lifeImg.setAttribute("src", (jsonObj)[index].img);
                    lifeImg.setAttribute("alt", "Lifestyle-Produkt");
                    lifeImg.setAttribute("class", "produktbild");
                    document.getElementById("lifestyle-produkt" + index)?.appendChild(lifeImg);
                    //Produktbezeichnung hinzufügen
                    let lifeH3: HTMLHeadingElement = document.createElement("h3");
                    lifeH3.innerHTML = (jsonObj)[index].name;
                    document.getElementById("lifestyle-produkt" + index)?.appendChild(lifeH3);
                    //Produkt_beschreibung hinzufügen
                    let lifeP: HTMLParagraphElement = document.createElement("p");
                    lifeP.innerHTML = (jsonObj)[index].beschreibung;
                    document.getElementById("lifestyle-produkt" + index)?.appendChild(lifeP);
                    // Preis hinzufügen
                    let lifePreis: HTMLHeadingElement = document.createElement("h4");
                    lifePreis.innerHTML = (jsonObj)[index].preis.toFixed(2) + "€";
                    document.getElementById("lifestyle-produkt" + index)?.appendChild(lifePreis);
                    break;
                //Hygiene-Kategorie
                case "hygiene":
                    newDiv.setAttribute("class", "hygiene-div");
                    newDiv.setAttribute("id", "hygiene-produkt" + index);
                    document.getElementById("hygiene")?.appendChild(newDiv);
                    // Produktbild hinzufügen
                    let hygImg: HTMLElement = document.createElement("img");
                    hygImg.setAttribute("src", (jsonObj)[index].img);
                    hygImg.setAttribute("alt", "Hygiene-Produkt");
                    hygImg.setAttribute("class", "produktbild");
                    document.getElementById("hygiene-produkt" + index)?.appendChild(hygImg);
                    // Produktbezeichnung hinzufügen
                    let hygH3: HTMLHeadingElement = document.createElement("h3");
                    hygH3.innerHTML = (jsonObj)[index].name;
                    document.getElementById("hygiene-produkt" + index)?.appendChild(hygH3);
                    // Produktbeschreibung hinzufügen
                    let hygP: HTMLParagraphElement = document.createElement("p");
                    hygP.innerHTML = (jsonObj)[index].beschreibung;
                    document.getElementById("hygiene-produkt" + index)?.appendChild(hygP);
                    let hygPreis: HTMLHeadingElement = document.createElement("h4");
                    hygPreis.innerHTML = (jsonObj)[index].preis.toFixed(2) + "€";
                    document.getElementById("hygiene-produkt" + index)?.appendChild(hygPreis);
                    break;
                default:
                    break;
            }
            //Button hinzufügen
            let newButton: HTMLButtonElement = document.createElement("button");
            newButton.innerHTML = "Jetzt kaufen";
            //hygDiv.appendChild(newButton).innerHTML = "in den Warenkorb";
            newButton.addEventListener("click", handleWarenkorbClick.bind(jsonObj[index]));
            document.getElementById("lifestyle-produkt" + index)?.appendChild(newButton);
            document.getElementById("hygiene-produkt" + index)?.appendChild(newButton);
            newButton.setAttribute("name", jsonObj[index].name);
        }
    }
    //Artikel auszuwählen, die in den Einkaufswagen gelegt werden sollen
    function putInCart(_produkt: Produkt): void {
        localStorage.setItem(_produkt.name, JSON.stringify(_produkt);
        console.log(localStorage);
    }
    //Funktion des "Kaufen"-Buttons
    function handleWarenkorbClick(this: Produkt, _click: MouseEvent): void {
        //Berechnung des Gesamt-Preises
        preisCounter += this.preis;
        console.log("Total: " + preisCounter.toFixed(2) + "€");

        //Berechnung der Artikelanzahl im Warenkorb
        warenAnzahl++;
        warenNr.innerHTML = (warenAnzahl).toString();

        //lege Item in Einkaufswagen
        putInCart(this);

        //   localStorage.setItem("name", (<HTMLElement>_click.target)?.getAttribute("name")!);
        //   localStorage.getItem("name").appendChild();
    }
    //Ein-/Ausblenden der Produktkategorien
    function handleCategoryClick(this: HTMLDivElement, _click: MouseEvent): void {
        switch (this.getAttribute("class")) {
            case "hygiene-kategorie":
                showHygiene();
                break;
            case "lifestyle-kategorie":
                showLifestyle();
                break;
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
}