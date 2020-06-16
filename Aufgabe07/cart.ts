namespace Produkte {

    let preisZaehler: number = 0;
    let versandkosten: number = 4.99;
    let cartProdukt: Produkt;
    let shoppingCart: HTMLDivElement;
    window.addEventListener("load", init);


    function init(_event: Event): void {
        shoppingCart = (<HTMLDivElement>document.getElementById("warenkorb"));
        buildProducts();

    }
    //Produkte aus dem localStorage anzeigen
    function buildProducts(): void {
        for (let i: number = 0; i < localStorage.length; i++) {
            let productKey: string = <string>localStorage.key(i);
            let jsonString: string = <string>localStorage.getItem(productKey);
            cartProdukt = <Produkt>JSON.parse(jsonString);
            preisZaehler += cartProdukt.preis;
            //Produkt-Container
            let cartDiv: HTMLDivElement = document.createElement("div");
            cartDiv.setAttribute("class", "cart-div");
            cartDiv.setAttribute("id", "cart-produkt" + i);
            shoppingCart.appendChild(cartDiv);
            //Produktbild
            let cartImg: HTMLElement = document.createElement("img");
            cartImg.setAttribute("src", cartProdukt.img);
            cartImg.setAttribute("alt", "Produkt im Warenkorb");
            cartImg.setAttribute("class", "cartbild");
            cartDiv.appendChild(cartImg);
            //Produktbezeichnung
            let cartH3: HTMLHeadingElement = document.createElement("h3");
            cartH3.innerHTML = cartProdukt.name;
            cartDiv.appendChild(cartH3);
            //Produktbeschreibung
            let cartP: HTMLParagraphElement = document.createElement("p");
            cartP.innerHTML = cartProdukt.beschreibung;
            cartDiv.appendChild(cartP);
            //Preis
            let cartPreis: HTMLHeadingElement = document.createElement("h4");
            cartPreis.innerHTML = cartProdukt.preis.toFixed(2) + "€";
            cartDiv.appendChild(cartPreis);
            //Button, um Artikel aus Warenkorb zu entfernen
            let cartButton: HTMLButtonElement = document.createElement("button");
            cartButton.innerHTML = "Artikel aus Warenkorb entfernen";
            cartButton.addEventListener("click", onClickDeleteProduct.bind(cartProdukt));
            cartButton.setAttribute("name", cartProdukt.name);
            cartDiv.appendChild(cartButton);
        }
        //Gesamtpreis inklusive Versandkosten
        let shoppingSummary: HTMLDivElement = (<HTMLDivElement>document.getElementById("warenkorb_total"));
        let gesamtPreis: HTMLHeadingElement = document.createElement("h4");
        gesamtPreis.innerHTML = ("Artikel gesamt: " + preisZaehler.toFixed(2) + "€");
        shoppingSummary.appendChild(gesamtPreis);
        let finalPreis: number = preisZaehler;
        if (preisZaehler > 0) {
            finalPreis = preisZaehler + versandkosten;
        }
        else {
            versandkosten = 0;
        }
        let versandPreis: HTMLHeadingElement = document.createElement("h4");
        versandPreis.innerHTML = ("Versandkosten: " + versandkosten + "€");
        shoppingSummary.appendChild(versandPreis);
        let totalPreis: HTMLHeadingElement = document.createElement("h4");
        totalPreis.innerHTML = ("Total: " + finalPreis + "€");
        shoppingSummary.appendChild(totalPreis);
        //Button, um alle Artikel aus dem Warenkorb zu entfernen
        let clearCart: HTMLButtonElement = document.createElement("button");
        clearCart.innerHTML = "Alle Artikel aus dem Warenkorb entfernen";
        clearCart.setAttribute("id", "clear-cart-button");
        clearCart.addEventListener("click", onClickClearCart.bind(cartProdukt));
        shoppingSummary.appendChild(clearCart);
        /*
        //Ähnliche Produkte
        let similarProducts: HTMLDivElement = (<HTMLDivElement>document.getElementById("similar_products"));
        let similarHeading: HTMLHeadingElement = document.createElement("h5");
        similarHeading.innerHTML = "Diese Produkte könnten Ihnen auch gefallen";
        similarProducts.appendChild(similarHeading);
        */

    }
    function onClickDeleteProduct(this: Produkt, _click: Event): void {
        localStorage.removeItem(this.name);
        location.reload();
    }
    function onClickClearCart(_click: Event): void {
        localStorage.clear();
        location.reload();
    }


}
