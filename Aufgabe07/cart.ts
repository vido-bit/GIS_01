namespace Warenkorb {

    interface Produkt {
        img: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }

    console.log("START");
    communicate("products.json");
    console.log("END");
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch("products.json");
        let jsonObj: Produkt [] = await response.json();
        console.log("Response", jsonObj);
      //  let produkte: Produkt[] = JSON.parse(jsonObj);
        // console.log("Produkte:", produkte);
    }


}
