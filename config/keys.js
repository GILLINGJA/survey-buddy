
// Check Heroku's environment variable NODE_ENV to see if the server is being run in production or development
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
