var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var Facebook = require('passport-facebook');

var DashController = require('./controllers/dashCtrl');
var UpperDashController = require('./controllers/upperDashCtrl');
var RidersController = require('./controllers/ridersCtrl');
var UsersController = require('./controllers/userCtrl');
var ContestsController = require('./controllers/contestsCtrl');
var gitignore = require('./ignore');
var User = mongoose.model('User', require('./models/User.js'));

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({secret: process.env.SECRET}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/dash', DashController.read);
app.get('/dash/:id', DashController.findEntriesByUser);
app.get('/dash/:id/entries', DashController.find);
app.post('/dash', DashController.create);
app.post('/dash/:id', DashController.show);
app.put('/dash/:id', DashController.update);
app.delete('/dash/:id', DashController.delete);

app.get('/riders', RidersController.read);
app.post('/riders', RidersController.create);
app.post('/riders/:id', RidersController.show);
app.put('/riders/:id', RidersController.update);
app.delete('/riders/:id', RidersController.delete);

app.get('/users', UsersController.read);
app.post('/users', UsersController.create);
app.post('/users/:id', UsersController.show);
app.put('/users/:id', UsersController.update);
app.delete('/users/:id', UsersController.delete);

app.get('/contests', ContestsController.read);
app.post('/contests', ContestsController.create);

passport.use(new Facebook({
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: '/auth/facebook/callback',
  profileFields : ['id', 'displayName', 'emails', 'photos']
},function(request, accessToken, refreshToken, profile, done) {
    console.log('***** fb profile: ', profile);
    User.findOne({facebookId: profile.id}, function(findErr, foundUser){
    	if (findErr) {
            console.log('cannot find user in db: ', findErr);
            return done(findErr, false);
        }
    	if (!foundUser) {
            console.log('going to create new user');
    	    var newUser = {
      	    	displayName: profile.displayName, //or whatever facebook/google/twitter/etc calls it on the profile object
      	    	// email: profile.emails[0].value, //or wherever facebook puts in on prifle
      	    	facebookId: profile.id, //or wherever on facebook profile
              contests: [],
              photo: profile.photos[0].value
            };
            User.create(newUser, function(createErr, createdUser){
                console.log('newUser: ' + createdUser);
    	    	if (createErr) return done(createErr, null);
    	    	return done(null, createdUser);
    	    });
    	} else {
            console.log(foundUser);
    	       return done(null, foundUser);
        }
    });

  }
));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/#/dash',
  failureRedirect: '/#/landing'
}), function(req, res) {
  console.log(req.session);
});
app.get('/auth/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var port = process.env.PORT;
var mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
   console.log('What\'s good Mongoose');
});
app.listen(port, function() {
    console.log("What up Node at port: " + port);
});
