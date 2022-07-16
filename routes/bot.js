const express = require('express');
const router = express.Router();
const botCtrl = require('../controller/bot');

router.get('/', botCtrl.getNextMove);

module.exports = router;