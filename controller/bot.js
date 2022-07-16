const express = require('express')
const Game = require('../models/game')
const computer = require('../methods/computer')

exports.getNextMove = (req, res, next) => {
  //method to find bot's next move -> use computer.minMax
  res.status(200).json({ message: 'Bot move found! '})
}

