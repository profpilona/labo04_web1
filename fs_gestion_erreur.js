/**
 * Auteur: Alain Pilon
 * Date: 11 avril 2023
 * Description: blablabla qu'est-ce que le programme fait?? 
 */
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
    if (err) {
        if (err.code==='ENOENT') {
            console.log(`Erreur le fichier n'existe pas`);
        } else {
            throw err;
        }
    } else {
        console.log(contenu);
    }
});
console.log('fin du programme');

/**
 * Description de ce que la fonction fait....
 * bla bla bla
 * 
 * @param {*} fichier : nom du fichier à lire
 * @param {*} nomDuVoisin : nom de mon voisin de gauche
 */
function blabla(fichier, nomDuVoisin) {

}

/**
 * Description de la fonction...........
 * .....
 * 
 * @param {*} nomDossier : nom du dossier où se trouve le fichier à ouvrir
 * @param {*} nomDuConjoint : nom du beau père de la conjointe du voisin
 * @returns : la valeur calculée par le curé
 */
function blabla2(nomDossier, nomDuConjoint) {
    const trucmachin = 21;
    return trucmachin;
}