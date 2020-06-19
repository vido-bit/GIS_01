//Module auf sämtliche importierte Funktionalitäten anwenden
import * as Http from "http";
//import * as Url from "url";

export namespace A08Server {
    console.log("Starting server");
    //Zuweisung der Port-Nummer
    let port: number = Number(process.env.PORT);
    //Port-Zuweisung, falls vorher fehlgeschlagen
    if (!port)
        port = 8100;
    //Server erstellen
    let server: Http.Server = Http.createServer();
    //Anfragen bearbeiten
    server.addListener("request", handleRequest);
    //Anfragen abfangen
    server.addListener("listening", handleListen);
    //Auf Anfragen von port warten
    server.listen(port);

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

        _response.write(_request.url);

        _response.end();
    }
}