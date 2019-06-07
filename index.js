const express = require('express'); // Using require because Node doesn't support ES6 import statements yet
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); // Does all the cookie creation and encryption
const passport = require('passport');
const bodyParser = require('body-parser');

// const authRoutes = require('./routes/authRoutes');
// const billingRoutes = require('./routes/billingRoutes');
// const surveyRoutes = require('./routes/surveyRoutes');
const keys = require('./config/keys');

require('./models/User');
require('./models/Survey');
require('./services/passport'); // Not being referenced in this file, just executed

mongoose.connect(keys.MONGO_URI);

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // How long the cookie will last (in milliseconds)
    keys: [keys.COOKIE_KEY] // An array of keys from which one will be randomly selected by cookieSession to encrypt the data
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

// Handling production
if(process.env.NODE_ENV === 'production') {
  // Express will serve up production assets (like main.js & main.css)
  app.use(express.static('client/build'));

  // Express will serve up index.html when asked for a route it doesn't recognise
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Express app to listen on dynamically assigned port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
