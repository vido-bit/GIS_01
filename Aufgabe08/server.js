"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
//Module auf sämtliche importierte Funktionalitäten anwenden
const Http = require("http");
//import * as Url from "url";
var A08Server;
(function (A08Server) {
    console.log("Starting server");
    //Zuweisung der Port-Nummer
    let port = Number(process.env.PORT);
    //Port-Zuweisung, falls vorher fehlgeschlagen
    if (!port)
        port = 8100;
    //Server erstellen
    let server = Http.createServer();
    //Anfragen bearbeiten
    server.addListener("request", handleRequest);
    //Anfragen abfangen
    server.addListener("listening", handleListen);
    //Auf Anfragen von port warten
    server.listen(port);
    //Ausführung bei Serverstart
    function handleListen() {
        console.log("Listening");
    }
    //Ausführung bei Anfrage
    function handleRequest(_request, _response) {
        console.log(_request.url);
        //Header -> Inhaltstyp HTML mit Zeichensatz UTF-8, Zugriff von überall
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map