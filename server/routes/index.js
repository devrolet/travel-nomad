const express = require('express');
const router = express.Router();

// import the models
const Travels = require('../models/Travels');

module.exports = function() {
    // homepage url
    router.get('/', (req, res) => {
        res.render('index', {
            pageTitle: 'Home'
        });
    });
    router.get('/about', (req, res) => {
        res.render('about', {
            pageTitle: 'About Us'
        });
    });
    router.get('/travels', (req, res) => {

        Travels.findAll()
            .then(travels => res.render('travels', {
                pageTitle: 'Upcoming Travels',
                travels
            }));
        
    });

    router.get('/travels/:id', (req, res) => {
       Travels.findByPk(req.params.id)
            .then(travel => res.render('travel', {
                travel
            }))
    });

    router.get('/testimonials', (req, res) => {
        res.render('testimonials', {
            pageTitle: 'Testimonials'
        });
        // res.send('Testimonials')
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