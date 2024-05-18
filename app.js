const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const connectToDatabase = require('./database/connect');
const apiRouter = require('./routes/apiRouter');

const app = express();
const PORT = 3005;

connectToDatabase();

app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  apiRouter
);

app.listen(PORT);