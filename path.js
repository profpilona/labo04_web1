const path = require('path');

const nomFichier = 'c:\\temp\\truc.html';
console.log(__filename);
console.log(path.basename(__filename));
console.log("aff de path.basename", path.basename(nomFichier));
console.log("aff de path.basename du fichier courant", path.basename(__filename));
console.log("aff de path.extname du fichier courant", path.extname(__filename));
console.log("aff de path.dirname du fichier courant", path.dirname(__filename));
console.log("aff du __dirname:", __dirname);
console.log("aff de path.dirname du truc.html", path.dirname(nomFichier));
console.log("aff de path.parse: ", path.parse(__filename));
console.log("aff de path.parse: ", path.parse(nomFichier));
let partieFichier = path.parse(__filename);
console.log('ext=', partieFichier.ext);
console.log('nom=', partieFichier.name);
console.log('disque=', partieFichier.root);
console.log('nom complet du fichier=', partieFichier.base);
console.log('Construction d\'un path:', path.join(__dirname, 'test', 'dossier2', 'fichier.txt') );
