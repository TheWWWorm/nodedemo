'use strict'

const router = require('express').Router();
const crypto = require('crypto');
const config = require('../config');
const { USER } = require('../models/db');

router.prefix = '/user';

router.post('/create', (req, res) => {
    req.body.password = crypto.createHash('md5').update(req.body.password).digest('hex');

    USER.make(req.body).then((result) => {
        res.send(result.dataValues);
    }).catch((err) => {
        res.send(err);
    });
});

module.exports = router;