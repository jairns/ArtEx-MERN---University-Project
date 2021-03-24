const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const eventRoute = require('./routes/events');
const venueRoute = require('./routes/venues');
const bookingRoute = require('./routes/bookings');
const hotelRoute = require('./routes/hotels');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const contactRoute = require('./routes/contact');

// Route Middlewares
app.use('/events', eventRoute);
app.use('/venues', venueRoute);
app.use('/bookings', bookingRoute);
app.use('/hotels', hotelRoute);
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/contact', contactRoute);


// Connect to DB 
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true , useUnifiedTopology: true },
    () => console.log('connected to db')
);


// How do we start listening to the server
app.listen(process.env.PORT || 5000);