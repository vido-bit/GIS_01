namespace Freezer {
    

    export interface Topping {
        img: string;
        vorschau: string;
        name: string;
        preis: number;
    }

    export interface Yogurt {
        img: string;
        name: string;
        preis: number;
    }


    export async function communicate(_url: RequestInfo): Promise<void> {
        let toppingResponse: Response = await fetch("toppings.json");
        jsonObj = await toppingResponse.json();
        let baseResponse: Response = await fetch("yogurtbases.json");
        jsonBase = await baseResponse.json();
    }
}