const mongoose = require('mongoose');
const { Schema } = mongoose; // equivalent to const Schema = mongoose.Schema

const userSchema = new Schema({
  googleID: String
});

mongoose.model('users', userSchema);
