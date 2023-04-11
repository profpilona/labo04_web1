const path = require('path');
const fs = require('fs');
const nomDossier = path.join(__dirname, 'test', 'dossier3');
const nomFichier = path.join(__dirname, 'test', 'exemple.txt');
const nouveauNom = path.join(__dirname, 'test', 'nouveau.txt');
console.log('debut du programme');
process.on('uncaughtException', err=>{
    console.error(`une erreur s'est produite: ${err.code}`);
    process.exit(1);
});
fs.readFile(nomFichier, 'utf-8', (err, contenu)=>{
    if (err) 
        throw err;
    console.log(contenu);
});
console.log('fin du programme');