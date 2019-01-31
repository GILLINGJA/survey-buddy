const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');

// passport.use() function parameters explained
// Parameter 1: the strategy to be used by Passport.js
//             - takes an object with client ID, secret and a callback URL
// Parameter 2: the callback function executed when the authentication flow is completed successfully
//      takes: - an accessToken (the code in the URL returned by the OAuth) - allows access to requested information specified in scope
//             - a refreshToken allows the accessToken (which expires) to be updated for accessing again
//             - the data requested, to demonstrate successful access
//             - done ????

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('access token: ', accessToken);
    console.log('refresh token: ', refreshToken);
    console.log('profile: ', profile);
  })
);
