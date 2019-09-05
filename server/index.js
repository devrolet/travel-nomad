const express = require('express');
const path = require('path');
const routes = require('./routes');

// import DB connection
const db = require('./config/database');

// test the connection
db.authenticate()
    .then(() =>console.log('Database connected'))
    .catch(error => console.log(error));

// import configurations
const configs = require('./config');

// create new server
const app = express();

const config = configs[app.get('env')];



// enable Pug
app.set('view engine', 'pug');

// add views folder
app.set('views', path.join(__dirname, './views') );

// load the public assets folder
app.use(express.static('public'));

// get the current year
app.use((req, res, next) => {
    const date = new Date();
    res.locals.currentYear = date.getFullYear();
    return next();
});

// pass sitename to views
app.locals.siteTitle = config.sitename;

// listen for the home page
app.use('/', routes() );

// run the application
app.listen(3000);