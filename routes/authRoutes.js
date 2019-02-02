const passport = require('passport');

module.exports = (app) => {
  // GoogleStrategy is automatically referenced with 'google' within passport
  // additionally 'profile', and 'email' are pre-defined identifiers for information within the Google+ API
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  // Passport automatically recognises there is a code in the URL, meaning authentication has already happened...
  // ... and takes this code, putting it into the accessToken variable
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
