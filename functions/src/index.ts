import * as functions from 'firebase-functions';

export const ping = functions.https.onRequest((request, response) => {
    functions.logger.info('pinged');
    response.send('pong ' + Date.now().toString());
});
