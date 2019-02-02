const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');

const User = mongoose.model('users');

// passport.use() function parameters explained
// Parameter 1: the strategy to be used by Passport.js
//             - takes an object with client ID, secret and a callback URL
// Parameter 2: the callback function executed when the authentication flow is completed successfully
//      takes: - an accessToken (the code in the URL returned by the OAuth) - allows access to requested information specified in scope
//             - a refreshToken allows the accessToken (which expires) to be updated for accessing again
//             - the data requested, to demonstrate successful access
//             - done function that is defined by passport to finalise the strategy. This requires two parameters
//               > an error object (null if successful)
//               > the user that we just tried to authenticate through Google

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleID: profile.id })
      .then((existingUser) => { // JS promise - to handle asynchronous requests
        if(existingUser) {
          console.log('User already exists. ' + profile.name.givenName + ' is logged in!');
          done(null, existingUser);
        } else {
          new User({ googleID: profile.id })
            .save()
            .then(user => {
              console.log('New user created! ' + profile.name.givenName + ' is logged in!');
              done(null, user);
            });
        }
      });
  })
);
