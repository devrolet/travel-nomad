const express = require('express');


// create new server
const app = express();

// listen for the home paage
app.use('/', (req, res) => {
    res.send('Index');
});

// run the application
app.listen(3000);