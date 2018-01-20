'use strict'

const Sequelize = require('sequelize');
const { db } = require('../config');
const logger = require('log4js').getLogger('Database');
const { readdirSync } = require('fs');
const { join } = require('path');

const sequelize = new Sequelize(db.name, db.login, db.pass, { ...db });

sequelize.authenticate().then(() => {
    logger.info('Connection has been established successfully.');
}).catch(err => {
    logger.error('Unable to connect to the database:', err);
    process.exit(-1);
});

module.exports = readdirSync(join(__dirname, './db_models/')).reduce((obj, fileName) => {
    logger.info(`Init [${fileName}] model`)

    const {
        name,
        fields,
        options,
        fn = {}
    } = require('./db_models/' + fileName);

    const model = sequelize.define(name, fields, options);
    fn.class && Object.assign(model, fn.class);
    fn.instance && Object.assign(model.prototype, fn.instance);

    obj[model.name] = model;

    return obj;
}, {});