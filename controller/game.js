const express = require('express')
const Game = require('../models/game')

exports.createGame = (req, res, next) => {
  //method to create game
  res.status(200).json({ message: 'Game created! '})
}

exports.deleteGame = (req, res, next) => {
  //method to delete game
  res.status(200).json({ message: 'Game deleted! '})
}

exports.patchGame = (req, res, next) => {
  //method to register player's turn
  //1 -> check if move is authorized
  //2 -> check if game is won
  //3 -> put new game in database
  //send back game
  res.status(200).json({ message: 'Game played! '})
}

