// import syntax with commonJS module
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// create MongoDB schema
require('./models/User');
require('./models/Survey');

// execute the whole passport.js file
require('./services/passport');

// connect to mongo DB
mongoose.connect(keys.mongoURI);

// init app
const app = express();

// ------------------- middleware ------------------- //
// use bodyParser, allow req.body to have the request body
app.use(bodyParser.json());

// credential: cookie & passport
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in mil sec
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

// ------------------- middleware ------------------- //


// import app routes
const authRoutes = require('./routes/authRoutes');
authRoutes(app);
const billingRoutes = require('./routes/billingRoutes');
billingRoutes(app);

const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function() {
    console.log('Listening on port %d', server.address().port);
});