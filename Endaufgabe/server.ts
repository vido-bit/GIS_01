import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";
//import { ParsedUrlQuery } from "querystring";
export namespace Freezer {
    interface Bestellungen {
        Vorname: string;
        Nachname: string;
        Straße: string;
        Wohnort: string;
        yogurt: string;
        toppings: string[];
        preis: number;
    }
    let bestellungen: Mongo.Collection;
    //Zuweisung der Port-Nummer
    let port: number | string | undefined = process.env.PORT;
    //Port-Zuweisung, falls vorher fehlgeschlagen
    if (!port)
        port = 8100;

    let databaseUrl: string = "mongodb+srv://firstAdmin:adminpower@gis-macht-geil.pszdj.mongodb.net/Bestellungen?retryWrites=true&w=majority";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string | undefined): void {

        console.log("Starting server on port:" + _port);
        //Server erstellen
        let server: Http.Server = Http.createServer();
        //Anfragen bearbeiten
        server.addListener("request", handleRequest);
        //Anfragen abfangen
        server.addListener("listening", handleListen);
        //Auf Anfragen von port warten
        server.listen(port);
    }
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        bestellungen = mongoClient.db("Bestellungen").collection("Students");
        //kontaktliste.insertOne({ name: "Hubert", firstname: "Manuel", registration: "756432" })
        console.log("Datenbank Verbindung", bestellungen != undefined);
    }
    //Ausführung bei Serverstart
    function handleListen(): void {

        console.log("Listening");
    }

    //Ausführung bei Anfrage
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log(_request.url);
        //Header -> Inhaltstyp HTML mit Zeichensatz UTF-8, Zugriff von überall
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let q: url.UrlWithParsedQuery = await url.parse(_request.url, true);
            let path: string = <string>q.pathname;
            if (path == "/send") {
                await sendBestellung(q);
            }
            else if (path == "/get") {
                await contactGet(_response);
            }
        }
        _response.end();
    }

    async function sendBestellung(_q: url.UrlWithParsedQuery): Promise<void> {
        console.log("Übermittle Daten an Mongo");
        console.log("Bestellungen: " + bestellungen);
        bestellungen.insertOne(_q.query);

    }
    async function contactGet(_response: Http.ServerResponse): Promise<void> {
        let bestellungsArray: Bestellungen[] = await bestellungen.find().toArray();
        _response.write(JSON.stringify(bestellungsArray));

    }
    /*
    export async function insert(_contact: ParsedUrlQuery): Promise<void> {
        console.log("insert" + _contact.firstname + _contact.name)
    }
    export async function removeOne(_query: ParsedUrlQuery): Promise<Mongo.DeleteWriteOpReslutObject> {
        let id: string = <string>_query["id"];
        let objId: Mongo.ObjectId = new Mongo.ObjectId(id);
        console.log("Entferne" + id);
        return await kontaktliste.deleteOne({ "_id": objId })
    }
    */

}