const path = require('path');
const fs = require('fs');
const nomDossier = path.join(__dirname, 'test', 'dossier3');
const nomFichier = path.join(__dirname, 'test', 'exemple.txt');
const nouveauNom = path.join(__dirname, 'test', 'nouveau.txt');
console.log('debut du programme');
// fs.mkdir(nomDossier, {}, erreur=>{
//     if (erreur) {
//         throw erreur;
//     }
//     console.log(`Dossier ${nomDossier} a été créé avec succès!`);
// });
// const contenuFichier = `Première ligne\n2e ligne
// 3e ligne`;
// fs.writeFile(nomFichier, contenuFichier, err=>{
//     if (err) 
//         throw err;
//     console.log(`Fichier ${nomFichier} créé avec succès!`);
// });
// const nouveauContenu = `
// Contenu qui est ajouté à la fin du fichier
// 5e ligne
// 6e ligne`;
// fs.appendFile(nomFichier, nouveauContenu, err=>{
//     if (err) 
//         throw err;
//     console.log(`Texte ajouté au fichier ${nomFichier}`);
// });
// fs.rename(nomFichier, nouveauNom, err=>{
//     if (err) throw err;
//     console.log(`fichier renommé!`);
// });
// fs.access( nomFichier, fs.constants.R_OK, err=>{
//     if (err)
//         console.log(`Le fichier ${nomFichier} n'existe pas ou n'est pas lisible`);
//     else {
//         fs.readFile( nomFichier, 'utf8', (err, contenu)=>{
//             if (err) throw err;
//             console.log(contenu);
//         });
//     }
// });
fs.stat(nomDossier, (err, stats)=>{
    if (err) throw err;
    console.log(`pour `, nomDossier);
    console.log(`C'est un dossier??`, stats.isDirectory());
    console.log(`Un fichier??`, stats.isFile());
    // console.log(stats);
});
fs.stat(nouveauNom, (err, stats)=>{
    if (err) throw err;
    console.log(`pour `, nouveauNom);
    console.log(stats.isDirectory()?'Un dossier':'pas un dossier');
    console.log(stats.isFile()?'Un fichier':'pas un fichier');
    // console.log(stats);
});
console.log('fin du programme');