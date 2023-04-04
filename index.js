console.log('SALUT!');

const personne = require('./personne');
console.log(personne);
console.log('voici le nom:', personne.nom);
console.log('voici son age:', personne.age);
const Personne = require('./classPersonne');
const paul = new Personne('Paul Larue', 39);
paul.salut();
console.log('voici son nom:', paul.nom);
console.log('voici son age:', paul.age);

console.log('voici un message \n sur 2 lignes');
console.log('voici un backslash \\');