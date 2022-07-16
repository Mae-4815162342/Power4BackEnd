const express = require('express');
const router = express.Router();
const gameCtrl = require('../controller/game');

router.post('/', gameCtrl.createGame);
router.delete('/:id', gameCtrl.deleteGame);
router.put('/:id', gameCtrl.patchGame);

module.exports = router;