var Rider = require('../models/Rider');

module.exports = {
  create: function(req, res) {
    Rider.create(req.body, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  },

  read: function(req, res) {
    Rider.find().sort({_id: 1}).exec(function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  },

  show: function(req, res) {
    Rider.findById(req.params.id, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  },

  update: function(req, res) {
    Rider.findByIdAndUpdate((req.params.id), req.body, { new: true }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  },
  delete: function(req, res) {
    Rider.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
}
