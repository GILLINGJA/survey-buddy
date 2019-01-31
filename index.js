const express = require('express'); // Using require because Node doesn't support ES6 import statements yet
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  }, (accessToken) => {
    console.log(accessToken);
  })
);

// GoogleStrategy is automatically referenced with 'google' within passport
// additionally 'profile', and 'email' are pre-defined identifiers for information within the Google+ API
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Express app to listen on dynamically assigned port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
