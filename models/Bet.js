var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  round: {type: String},
  race: {type: String},
  location: {type: String},
  stadium: {type: String},
  date: {type: String},
  users:
  // []

  [{
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    fourpick: { type: mongoose.Schema.ObjectId, ref: 'Rider' },
    twopick: { type: mongoose.Schema.ObjectId, ref: 'Rider' }
  }]
});

module.exports = mongoose.model('Bet', Schema);
