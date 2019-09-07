const express = require('express');
const router = express.Router();

// import the models
const Travels = require('../models/Travels');
const Testimonials = require('../models/Testimonials');

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
        
        Testimonials.findAll()
            .then(testimonials => res.render('testimonials', {
                pageTitle: 'Testimonials',
                testimonials
            }));
    });

    // handles form submission with POST
    router.post('/testimonials', (req, res) => {
        let {name, email, message} = req.body;

        // validate the form
        let errors = [];

        if(!name) {
            errors.push({'message': 'Add Your Name'})
        }
        if(!email) {
            errors.push({'message': 'Add Your Email'})
        }
        if(!message) {
            errors.push({'message': 'Add Your Testimonial'})
        }
        console.log(errors);
        // check for errors
        if(errors.length > 0) {
            // display the warning to the view
            res.render('testimonials', {
                pageTitle: 'Testimonials',
                errors,
                name,
                email,
                message
            })
        } else {
            // save to db
            Testimonials.create({
               name,
               email,
               message
            })
            .then(() => res.redirect('/testimonials'))
            .catch(error => console.log(error))
        }

        // save to database
    });
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