/* eslint-disable no-console */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
  });
});

const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}.`));
