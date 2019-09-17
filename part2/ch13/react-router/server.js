const path = require('path');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  let now = (new Date()).toUTCString();
  console.log(`${now} ${req.method} ${req.url}`);
  next();
});

app.use(express.static(__dirname));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(9000, () => console.log('Listening on port 9000'));