'use strict'

const logger = require('log4js').getLogger('Middleware');

module.exports = (req, res, next) => {
    logger.info(`[${req.method}]Request to => ${req.url}`);
    Object.keys(req.body).length && logger.info(`Body =>, ${JSON.stringify(req.body, '', 2)}`);
    // if (config.checkLogin && req.url != '/' && !req.session.loggedIn) {
    //     res.redirect('/');
    // }

    const _send = res.send;
    res.send = (...args) => {
        logger.info(`[${req.method}]Response to ${req.url}`)
        if (args[0]) {
            logger.info(`With Body => ${JSON.stringify(args[0], '', 2)}`);
        }
        //_send(...args)
        _send.apply(res, args)
    }
    next(); 
};