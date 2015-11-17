var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  facebookId: {type: String},
  displayName: {type: String},
  photo: {type: String},
  email: {type: String},
  contests: [{ type: mongoose.Schema.ObjectId, ref: 'Bet' }]
})

module.exports = mongoose.model('User', Schema)
