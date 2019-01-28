const express = require('express'); // Using require because Node doesn't support ES6 import statements yet

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// Express app to listen on dynamically assigned port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
