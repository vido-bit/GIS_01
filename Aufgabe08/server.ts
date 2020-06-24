//Module auf sämtliche importierte Funktionalitäten anwenden
import * as Http from "http";
import * as url from "url";

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


        let adresse: string = "http://localhost:8080/default.htm?jahr=2017&monat=february";
        //Adresse parsen (umwandeln):
        let q: url.UrlWithParsedQuery = url.parse(adresse, true);

        /*Die parse Methode gibt ein Objekt zurück, dass die URL Eigenschaften enthält. So können die fest definierten Eigenschaften einer URL ausgelesen werden:*/
        console.log(q.host);
        console.log(q.pathname);
        console.log(q.search);

        /*Die query Eigenschaft gibt ein Ojekt zurück, dass alle query-string Parameter als Eigenschaften besitzt. So können beliebig gesendete Attribute ausgelesen werden:*/
        var qdata = q.query;
       // console.log(qdata.monat);
        //console.log(qdata.jahr);
        console.log(qdata);

        //Header -> Inhaltstyp HTML mit Zeichensatz UTF-8, Zugriff von überall
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write(_request.url);

        _response.end();
    }
}