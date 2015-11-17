var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  title: {type: String, required: true},
  mypicks: {type: String, required: true},
  entries: {type: Number, required: true},
  prize: {type: Number, required: true},
  starts: {type: Number, required: true}
})

module.exports = mongoose.model('Pick', schema);
