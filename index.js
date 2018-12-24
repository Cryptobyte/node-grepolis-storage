const Mongoose = require('mongoose');
const Grepolis = require('grepolis');

Mongoose.connect(
  'mongodb://localhost/Grepolis', 
  { 
    useNewUrlParser: true 
  },
  err => {
    if (err) {
      console.log('Database Error: ', err);
    }
  }
);
