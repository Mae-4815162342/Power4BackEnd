const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
  board: { type: Array, required: true },
  turn: { type: Number, required: true},
  isWon: { type: Boolean, required: true }
});

module.exports = mongoose.model('Game', gameSchema);