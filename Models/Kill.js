const Mongoose = require('mongoose');

var kill = new Mongoose.Schema({
  rank: Number,
  killId: String,
  points: Number,
  type: ['Player', 'Alliance'],
  subType: ['Attack', 'Defend']
});

module.exports = Mongoose.model('kill', kill);