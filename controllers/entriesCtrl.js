var Bet = require('../models/Bet');

module.exports = {
  create: function(req, res) {
    Bet.create(req.body, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  },

  read: function(req, res) {
    Bet.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  },

  show: function(req, res) {
    Bet.findById(req.params.id, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  },

  update: function(req, res) {
    Bet.findOneAndUpdate(
      {_id: req.params.id},
      {$push: {users: req.body}},
      {safe: true, upsert: true},

      function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  },
  delete: function(req, res) {
    Bet.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
}
