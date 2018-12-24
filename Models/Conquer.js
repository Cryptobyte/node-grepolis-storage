const Mongoose = require('mongoose');

var conquer = new Mongoose.Schema({
  townId: String,
  time: Date,
  newPlayerId: String,
  oldPlayerId: String,
  newAllyId: String,
  oldAllyId: String,
  points: Number
});

module.exports = Mongoose.model('conquer', conquer);