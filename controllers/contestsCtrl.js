var Contest = require('../models/Contest');

module.exports = {
  create: function(req, res) {
    Contest.create(req.body, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  },

  read: function(req, res) {
    Contest.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  },

  show: function(req, res) {
    Contest.findById(req.params.id, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  },

  update: function(req, res) {
    Contest.findByIdAndUpdate((req.params.id), req.body, { new: true }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  },
  delete: function(req, res) {
    Contest.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
}
