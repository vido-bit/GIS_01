"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
//Module auf sämtliche importierte Funktionalitäten anwenden
const Http = require("http");
const url = require("url");
var A09Server;
(function (A09Server) {
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
    //let url = require("url");
    let adresse = "http://localhost:8080/default.htm?jahr=2017&monat=february";
    let q = url.parse(adresse, true);
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);
    let qdata = q.query;
    console.log(qdata.monat);
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
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=server.js.map