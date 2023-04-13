const uuid = require('uuid');
const EventEmitter = require('events');
class Logger extends EventEmitter{
    log(msg) {
        let maDate = new Date();
        this.emit('message', {
            id: uuid.v4(), 
            temps: maDate.toLocaleString(), 
            message: msg
        });
    }
    erreur(msg) {
        let maDate = new Date();
        this.emit('erreur', {
            id: uuid.v4(), 
            temps: maDate.toLocaleString(), 
            message: msg
        });
    }
}
module.exports = Logger;