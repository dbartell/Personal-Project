var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {type: String},
  number: {type: Number},
  pic: {type: String},
  motorcycle: {String},
  class: {type: Number},
  anaheim_one: {type: Number}
})

module.exports = mongoose.model('Rider', schema);
