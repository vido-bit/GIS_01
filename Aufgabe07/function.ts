namespace Produkte {
    

    export interface Produkt {
        img: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }


    export async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch("products.json");
        jsonObj = await response.json();
    }
}