const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

// import DB connection
const db = require('./config/database');

// test the connection
// db.authenticate()
//     .then(() =>console.log('Database connected'))
//     .catch(error => console.log(error));

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
    //take the current page
    res.locals.currentPage = req.path;
    
    return next();
});

// pass sitename to views
app.locals.siteTitle = config.sitename;

// enable body parser
app.use(bodyParser.urlencoded({extended: true}));

// listen for the home page
app.use('/', routes() );

// run the application
app.listen(3000);