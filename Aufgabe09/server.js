"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
//Module auf sämtliche importierte Funktionalitäten anwenden
const Http = require("http");
const url = require("url");
//import { ParsedUrlQuery } from "querystring";
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
    /*
        console.log(q.host);
        console.log(q.pathname);
        console.log(q.search);
    
        let qdata: ParsedUrlQuery = q.query;
        console.log(qdata);
    */
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
        if (_request.url) {
            let q = url.parse(_request.url, true);
            let path = q.pathname;
            if (path == "/json") {
                console.log("JSON is true");
                let jsonString = JSON.stringify(q.query);
                _response.write(jsonString);
            }
            if (path == "/html") {
                console.log("HTML is true");
                for (let key in q.query) {
                    _response.write(key + ":" + q.query[key] + "<br>");
                }
            }
            // let jsonObj: JSON = JSON.parse(jsonString);
            //  console.log(jsonObj);
            /*    if (path == "//html") {
                    console.log("HTML is true");
                    for (let key in q.query) {
                        _response.write(key + ":" + q.query[key] + "<br>");
                    }
                }
                else if (path == "//json") {
                    console.log("JSON is true");
                    let jsonString: string = JSON.stringify(q.query);
                    _response.write(jsonString);
                }
                */
        }
        _response.end();
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=server.js.map