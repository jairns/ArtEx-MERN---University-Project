const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();
const nodemailer = require('nodemailer');

let email;
let message;

// GETTING CONTACT FORM INFO
router.post('/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        email = req.body.email;
        message = req.body.message;

                // Step 1
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        })

        // Step 2
        let mailOptions = {
            from: email,
            to: 'airnsjack@gmail.com',
            subject: 'An email from the ArtEx contact form',
            text: message
        }

        // Step 3
        transporter.sendMail(mailOptions, function(err, data){
            if(err) {
                console.log('Error occurs')
            } else {
                console.log('Email sent');
            }
        })
            } catch(err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;