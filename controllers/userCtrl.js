var mongoose = require('mongoose');
var Q = require('q');
var User = mongoose.model('User', require('../models/User.js'));
module.exports = {
    findOrCreate: function(profile){
    var def = Q.defer();
    var query = [];
    var update = {};
    if (profile.provider === 'facebook') {
      query.push({'facebookId': profile.id});
      update.facebookId = profile.id;
      query.push({'displayName': profile.displayName});
      update.displayName = profile.displayName;
      query.push({'photo': profile.photos[0].value});
      update.photo = profile.photos[0].value;
      query.push({'email': profile.email});
      update.email = profile.email;
    }

    User.findOneAndUpdate({ $or: query }, update, {new: true}, function(updateErr, user){
      if (!user) {
        var newUser = {};
        if (profile.provider === 'facebook')
        newUser.facebookId = profile.id;
        newUser.displayName = profile.displayName;
        newUser.photo = profile.photos[0].value;
        newUser.email = profile.email;

        console.log('newUser: ', newUser);
        User.create(newUser, function(createErr, newUser){
          def.resolve(newUser);
        });
      }
      def.resolve(user);
    });
    return def.promise;
  },
  create: function(req, res) {
    User.create(req.body, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  },

  read: function(req, res) {
      console.log('current user ' , req.user);
      res.json(req.user);
  },

  show: function(req, res) {
    User.findById(req.params.id, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  },

  update: function(req, res) {
    User.findByIdAndUpdate((req.params.id), req.body, { new: true }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  },
  delete: function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
}
