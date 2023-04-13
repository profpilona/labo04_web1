/**
 * Exemple d'utilisation de la librairie os
 * Alain Pilon
 * 13 avril 2023
 */
const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log('Memoire totale: (en GO)', os.totalmem()/1024/1024/1024);
console.log('Memoire libre: (en GO)', os.freemem()/1024/1024/1024);
console.log("uptime (en heures)", os.uptime() / 3600);