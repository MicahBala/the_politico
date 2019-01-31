'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import parties from './routes/parties';

const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to POLITIO');
});

app.use('/api/v1/parties', parties);

// Environment variable PORT
const port = process.env.PORT || 3000;

// Listen on a given port
app.listen(port, () => console.log(`Listening on port ${port} ...`));
