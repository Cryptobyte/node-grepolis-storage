const Mongoose = require('mongoose');

var town = new Mongoose.Schema({
  townId: String,
  playerId: String,
  name: String,
  islandX: Number,
  islandY: Number,
  numberOnIsland: Number,
  points: Number
});

module.exports = Mongoose.model('town', town);