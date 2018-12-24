const Mongoose = require('mongoose');

var alliance = new Mongoose.Schema({
  allianceId: String,
  name: String,
  points: Number,
  towns: Number,
  members: Number,
  rank: Number
});

module.exports = Mongoose.model('alliance', alliance);