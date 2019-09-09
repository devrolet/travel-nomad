const express = require('express');
const router = express.Router();

// import the models
const Travels = require('../models/Travels');
const Testimonials = require('../models/Testimonials');

// import the controllers
const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const travelController = require('../controllers/travelController');
const testimonialController = require('../controllers/testimonialController');

module.exports = function() {
    // homepage url
    router.get('/', homeController.homeInformation);
    router.get('/about', aboutController.aboutInformation);
    
    router.get('/travels', travelController.displayTravels);
    router.get('/travels/:id', travelController.displayTravel);

    router.get('/testimonials', testimonialController.displayTestimonials);

    // handles form submission with POST
    router.post('/testimonials', testimonialController.addTestimonial);
    return router;
    
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