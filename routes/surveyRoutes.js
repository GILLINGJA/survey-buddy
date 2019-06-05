const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

// Instead of requiring in the Survey.js model file, we ask mongoose directly
// to avoid the error caused by multiple requests to mongoose
const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })), // equivalent to map(email => { return { email: email.trim() } })
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
};
