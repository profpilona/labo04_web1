const path = require('path');
const fs = require('fs');
const nomFichier = path.join(__dirname, 'test', 'fichier.txt');
console.log('debut du programme');
const contenu = fs.readFileSync(nomFichier, { encoding: 'utf-8' });
console.log(contenu);
console.log('fin du programme');