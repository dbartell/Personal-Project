var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  Title: {type: String},
  Entries: {type: Number},
  Max: {type: Number},
  Entry: {type: Number},
  Prizes: {type: Number},
  Starts: {type: Number},
  contest_ID: {type: Number}
});

module.exports = mongoose.model('Contest', schema);
