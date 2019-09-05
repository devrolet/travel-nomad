const express = require('express');
const path = require('path');
const routes = require('./routes');


// create new server
const app = express();

// enable Pug
app.set('view engine', 'pug');

// add views folder
app.set('views', path.join(__dirname, './views') );

// listen for the home page
app.use('/', routes() );

// run the application
app.listen(3000);