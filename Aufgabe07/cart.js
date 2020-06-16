"use strict";
var Produkte;
(function (Produkte) {
    let preisZaehler = 0;
    let versandkosten = 4.99;
    let cartProdukt;
    let shoppingCart;
    window.addEventListener("load", init);
    function init(_event) {
        shoppingCart = document.getElementById("warenkorb");
        buildProducts();
    }
    //Produkte aus dem localStorage anzeigen
    function buildProducts() {
        for (let i = 0; i < localStorage.length; i++) {
            let productKey = localStorage.key(i);
            let jsonString = localStorage.getItem(productKey);
            cartProdukt = JSON.parse(jsonString);
            preisZaehler += cartProdukt.preis;
            //Produkt-Container
            let cartDiv = document.createElement("div");
            cartDiv.setAttribute("class", "cart-div");
            cartDiv.setAttribute("id", "cart-produkt" + i);
            shoppingCart.appendChild(cartDiv);
            //Produktbild
            let cartImg = document.createElement("img");
            cartImg.setAttribute("src", cartProdukt.img);
            cartImg.setAttribute("alt", "Produkt im Warenkorb");
            cartImg.setAttribute("class", "cartbild");
            cartDiv.appendChild(cartImg);
            //Produktbezeichnung
            let cartH3 = document.createElement("h3");
            cartH3.innerHTML = cartProdukt.name;
            cartDiv.appendChild(cartH3);
            //Produktbeschreibung
            let cartP = document.createElement("p");
            cartP.innerHTML = cartProdukt.beschreibung;
            cartDiv.appendChild(cartP);
            //Preis
            let cartPreis = document.createElement("h4");
            cartPreis.innerHTML = cartProdukt.preis.toFixed(2) + "€";
            cartDiv.appendChild(cartPreis);
            //Button, um Artikel aus Warenkorb zu entfernen
            let cartButton = document.createElement("button");
            cartButton.innerHTML = "Artikel aus Warenkorb entfernen";
            cartButton.addEventListener("click", onClickDeleteProduct.bind(cartProdukt));
            cartButton.setAttribute("name", cartProdukt.name);
            cartDiv.appendChild(cartButton);
        }
        let shoppingSummary = document.getElementById("warenkorb_total");
        let gesamtPreis = document.createElement("h4");
        gesamtPreis.innerHTML = ("Gesamtpreis: " + preisZaehler.toFixed(2) + "€");
        shoppingSummary.appendChild(gesamtPreis);
        let versandPreis = document.createElement("h4");
        versandPreis.innerHTML = ("Versandkosten: " + versandkosten + "€");
        shoppingSummary.appendChild(versandPreis);
        let finalPreis = preisZaehler + versandkosten;
        let totalPreis = document.createElement("h4");
        totalPreis.innerHTML = ("Total: " + finalPreis + "€");
        shoppingSummary.appendChild(totalPreis);
        let clearCart = document.createElement("button");
        clearCart.innerHTML = "Alle Artikel aus dem Warenkorb entfernen";
        clearCart.setAttribute("id", "clear-cart-button");
        clearCart.addEventListener("click", onClickClearCart.bind(cartProdukt));
        shoppingSummary.appendChild(clearCart);
    }
    function onClickDeleteProduct(_click) {
        localStorage.removeItem(this.name);
        location.reload();
    }
    function onClickClearCart(_click) {
        localStorage.clear();
        location.reload();
    }
})(Produkte || (Produkte = {}));
//# sourceMappingURL=cart.js.map