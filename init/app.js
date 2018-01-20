'use strict'

const { readdirSync } = require('fs');
const { join } = require('path');
const { json, urlencoded } = require('body-parser');
const session = require('express-session');
const logger = require('log4js').getLogger('App');

const app = require('express')();


app.use(json());       
app.use(urlencoded({     
  extended: true
}));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))

app.use(require('./middleware'));

readdirSync(join(__dirname, '../controllers/')).forEach(fileName => {
    logger.info(`Starting [${fileName}] controller`)
    const controller = require('../controllers/' + fileName)
    app.use(controller.prefix, controller)
});

app.use((err, req, res, next) => {
    logger.error('Error occured', err.stack);
    res.status(500).send({error: 'Server error!'});
});

app.all('*', (req, res) => {
    res.status(404).send('Not found');
});

process.on('uncaughtException', (err) => {
    logger.error('UncaughtException', err.stack);
});

process.on('unhandledRejection', (err) => {
    logger.error('Unhandled Rejection', err.stack);
});

module.exports = app;