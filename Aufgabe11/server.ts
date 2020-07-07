//Module auf sämtliche importierte Funktionalitäten anwenden
import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";
//import { ParsedUrlQuery } from "querystring";

export namespace A09Server {
    let kontaktliste: Mongo.Collection;
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let databaseUrl: string = "mongodb://localhost:27018";

    startServer(port);
    connectTodDatabase(databaseUrl);

    function startServer(_port: number): void {

        console.log("Starting server on port:" + _port);
        //Zuweisung der Port-Nummer
        //Port-Zuweisung, falls vorher fehlgeschlagen
        //Server erstellen
        let server: Http.Server = Http.createServer();
        //Anfragen bearbeiten
        server.addListener("request", handleRequest);
        //Anfragen abfangen
        server.addListener("listening", handleListen);
        //Auf Anfragen von port warten
        server.listen(port);
    }
    async function connectTodDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options)
        await mongoClient.connect();
        kontaktliste = mongoClient.db("Test").collection("Students");
        console.log("Datenbank Verbindung", kontaktliste != undefined);
    }
    //Ausführung bei Serverstart
    function handleListen(): void {
        console.log("Listening");
    }

    //Ausführung bei Anfrage
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log(_request.url);
        //Header -> Inhaltstyp HTML mit Zeichensatz UTF-8, Zugriff von überall
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
            let path: string = <string>q.pathname;
            if (path == "/json") {
                console.log("JSON is true");
                let jsonString: string = JSON.stringify(q.query);
                _response.write(jsonString);
            }
            else if (path == "/html") {
                console.log("HTML is true");
                for (let key in q.query) {
                    _response.write(key + ":" + q.query[key] + "<br>");
                }
            }
        }

        _response.end();
    }
}

