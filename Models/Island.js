const Mongoose = require('mongoose');

var island = new Mongoose.schema({
  islandId: String,
  x: Number,
  y: Number,
  islandType: Number,
  availableTowns: Number,
  resourcePlus: String,
  resourceMinus: String
});

module.exports = Mongoose.model('island', island);