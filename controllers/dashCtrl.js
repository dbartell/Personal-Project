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
    Bet.find({})
    .sort({_id: 1})
    .populate('users.user users.fourpick users.twopick')
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  find: function(req, res) {
    Bet.findById(req.params.id, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        return res.status(200).json(result);
      }
  }).populate('users.user users.fourpick users.twopick')
  },
  findEntriesByUser: function(req, res) {
      Bet.find({})
      .where('users.user')
      .sort({round : 1})
      .equals(req.params.id)
      .populate('users.user users.fourpick users.twopick')
      .exec(function(err, bets) {
        if(err) return res.status(500).json(err);
        console.log('my bets: ', bets)
        return res.status(200).json(bets);
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
