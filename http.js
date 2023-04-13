const http = require('http');
const PORT = 8000;

http.createServer((requete, reponse)=>{
    // afficher la page Web demandée???
    if (requete.url === '/' || requete.url === '/index.html') {
        reponse.writeHead(200, { 'Content-Type': 'text/html'});
        reponse.write('<h1>Voici ma page index.html</h1>');
        reponse.end();
    } else {
        reponse.writeHead(404, { 'Content-Type': 'text/html'});
        reponse.write('<h1>Page demand&eacute;e introuvable</h1>\n');
        reponse.write(`<h2>${requete.url}</h2>`);
        reponse.end();
    }
    console.log(requete.url);
}).listen(PORT, ()=>console.log('Le service Web est démarré sur le port=', PORT));
