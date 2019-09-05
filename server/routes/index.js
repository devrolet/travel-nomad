const express = require('express');
const router = express.Router();

module.exports = function() {
    // homepage url
    router.get('/', (req, res) => {
        res.render('index');
    });
    router.get('/about', (req, res) => {
        res.render('about');
    });
    // router.get('/services', (req, res) => {
    //     res.send('Services');
    // });
    // router.get('/pricing', (req, res) => {
    //     res.send('Pricing');
    // });
    // router.get('/contact', (req, res) => {
    //     res.send('Contact Us');
    // });

    return router;
}