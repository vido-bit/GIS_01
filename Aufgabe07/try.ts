namespace demo {
    console.log("START");
    communicate("https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/testjson.json");
    console.log("END");

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        response.json();
        console.log("Response", response);
    }
}