'use strict'

const router = require('express').Router();
const crypto = require('crypto');
const config = require('../config');
const { USER } = require('../models/db');

router.prefix = '/user';

function toMD5(string) {
    return crypto.createHash('md5').update(string).digest('hex');
}

router.post('/create', (req, res) => {
    req.body.password = toMD5(req.body.password);

    USER.make(req.body).then((result) => {
        res.send(result.dataValues);
    }).catch((err) => {
        res.send(err);
    });
});

router.get('/checkLoginPass', (req, res) => {
    req.body.password = toMD5(req.body.password);

    USER.checkLoginPass(req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });
});

router.post('/update', (req, res) => {

    USER.updateByID(req.body.id, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });
});

module.exports = router;