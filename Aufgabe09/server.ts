//Module auf sämtliche importierte Funktionalitäten anwenden
import * as Http from "http";
import * as url from "url";
//import { ParsedUrlQuery } from "querystring";

export namespace A09Server {
    console.log("Starting server");
    //Zuweisung der Port-Nummer
    let port: number = Number(process.env.PORT);
    //Port-Zuweisung, falls vorher fehlgeschlagen
    if (!port)
        port = 8100;
    //Server erstellen
    let server: Http.Server = Http.createServer();
    //Anfragen bearbeiten
    server.addListener("request", handleRequestHtml);
    server.addListener("request", handleRequestJson);
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
    function handleListen(): void {
        console.log("Listening");
    }

    //Ausführung bei Anfrage
    function handleRequestHtml(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log(_request.url);
        //Header -> Inhaltstyp HTML mit Zeichensatz UTF-8, Zugriff von überall
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
            for (let key in q.query) {
                _response.write(key + ":" + q.query[key] + "<br>");
            }
            let jsonString: string = JSON.stringify(q.query);
            _response.write(jsonString);
        }

        _response.end();
    }
}
function handleRequestJson(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log(_request.url);
    //Header -> Inhaltstyp HTML mit Zeichensatz UTF-8, Zugriff von überall
    _response.setHeader("content-type", "application/json; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write("This is JSON response");

    _response.end();
}