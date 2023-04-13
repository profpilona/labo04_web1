/**
 * Exemple d'utilisation de la librairie afin de créer des gestionnaires
 * d'événement
 * Auteur: Alain 
 * Date: 13 avril 2023
 */
const EventEmitter = require('events');
class MonEmeteurClasse extends EventEmitter{ }

// objet pour émettre un événement
const emeteur = new MonEmeteurClasse();
// création du gestionnaire d'événement
emeteur.on('evenementX', ()=>{console.log('evenement X est appelé')});
emeteur.on('evenementY', ()=>{console.log('evenement Y est appelé')});

emeteur.emit('evenementX');
emeteur.emit('evenementX');
emeteur.emit('evenementY');
emeteur.emit('evenementX');