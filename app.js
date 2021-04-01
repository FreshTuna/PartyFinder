const path         = require('path');
const express      = require('express');
const mongoose     = require('mongoose');
const morgan       = require('morgan');
const bodyParser   = require('body-parser');
const cors         = require('cors');
const configDB     = require('./config/database');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3000;
const db   = mongoose.connect(configDB.url);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser('1234'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

const routes = require('./routes');
app.use(routes);

const http = require('http').createServer(app)

http.listen(port , () => {
  console.log('The magic starts here!');
})

module.exports = app;
