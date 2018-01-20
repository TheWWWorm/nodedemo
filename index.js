'use strict'

const app = require('./init/app');
const config = require('./config');
const logger = require('log4js').getLogger('Server');

const { port, host } = config;

const server = app.listen({
    port,
    host
}, () => {
    logger.info(`Starting on http://${host}:${port}`);
});

module.exports = server;
