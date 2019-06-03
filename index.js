const express = require('express'); // Using require because Node doesn't support ES6 import statements yet
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); // Does all the cookie creation and encryption
const passport = require('passport');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const keys = require('./config/keys');

require('./models/User');
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

authRoutes(app);
billingRoutes(app);

// Express app to listen on dynamically assigned port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
