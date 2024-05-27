const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser')
const pagesRouter = require('./routes/pages.js')

const connectToDatabase = require('./database/connect');
const apiRouter = require('./routes/apiRouter');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  express.static(path.join(__dirname, 'public')),
  apiRouter
);



app.listen(PORT);