const Mongoose = require('mongoose');

var player = new Mongoose.Schema({
  playerId: String,
  name: String,
  allianceId: String,
  points: Number,
  rank: Number,
  towns: Number
});

module.exports = Mongoose.model('player', player);