"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A11Server = void 0;
//Module auf sämtliche importierte Funktionalitäten anwenden
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
//import { ParsedUrlQuery } from "querystring";
var A11Server;
(function (A11Server) {
    let kontaktliste;
    let port = process.env.PORT;
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb+srv://firstAdmin:adminpower@gis-macht-geil.pszdj.mongodb.net/Test?retryWrites=true&w=majority";
    startServer(port);
    connectTodDatabase(databaseUrl);
    function startServer(_port) {
        console.log("Starting server on port:" + _port);
        //Zuweisung der Port-Nummer
        //Port-Zuweisung, falls vorher fehlgeschlagen
        //Server erstellen
        let server = Http.createServer();
        //Anfragen bearbeiten
        server.addListener("request", handleRequest);
        //Anfragen abfangen
        server.addListener("listening", handleListen);
        //Auf Anfragen von port warten
        server.listen(port);
    }
    async function connectTodDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        kontaktliste = mongoClient.db("Test").collection("Students");
        //kontaktliste.insertOne({ name: "Hubert", firstname: "Manuel", registration: "756432" })
        console.log("Datenbank Verbindung", kontaktliste != undefined);
    }
    //Ausführung bei Serverstart
    function handleListen() {
        console.log("Listening");
    }
    //Ausführung bei Anfrage
    async function handleRequest(_request, _response) {
        console.log(_request.url);
        //Header -> Inhaltstyp HTML mit Zeichensatz UTF-8, Zugriff von überall
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = await url.parse(_request.url, true);
            let path = q.pathname;
            if (path == "/send") {
                await contactSend(q);
            }
            else if (path == "/get") {
                await contactGet(_response);
            }
        }
        _response.end();
    }
    async function contactSend(_q) {
        console.log("Übermittle Daten an Mongo");
        console.log("Kontaktliste: " + kontaktliste);
        kontaktliste.insertOne(_q.query);
    }
    async function contactGet(_response) {
        let kontaktArray = await kontaktliste.find().toArray();
        _response.write(JSON.stringify(kontaktArray));
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
})(A11Server = exports.A11Server || (exports.A11Server = {}));
//# sourceMappingURL=server.js.map