const express = require('express'); // Using require because Node doesn't support ES6 import statements yet
const mongoose = require('mongoose');

require('./services/passport'); // Not being referenced in this file, just executed
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');

mongoose.connect(keys.MONGO_URI);

const app = express();

authRoutes(app);

// Express app to listen on dynamically assigned port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
