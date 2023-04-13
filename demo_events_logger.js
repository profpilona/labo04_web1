const Logger = require('./events_logger');
const logger = new Logger();

logger.on('message', (data)=>console.error('message information:', data));
logger.on('erreur', (data)=>console.error('message erreur:', data));

logger.log('Salut tout le monde!');
logger.log('2e message');
logger.erreur('oups une erreur s est produite');
