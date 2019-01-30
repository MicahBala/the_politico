'use strict';

const express = require('express');
const parties = require('./routes/parties');
const offices = require('./routes/offices');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to POLITIO');
});

app.use('/api/v1/parties', parties);
app.use('/api/v1/offices', offices);

// Environment variable PORT
const port = process.env.PORT || 3000;

// Listen on a given port
app.listen(port, () => console.log(`Listening on port ${port} ...`));
