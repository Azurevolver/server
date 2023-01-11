// import syntax with commonJS module
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// create user schema
require('./models/user');

// execute the whole passport.js file
require('./services/passport');

// connect to mongo DB
mongoose.connect(keys.mongoURI);

// init app
const app = express();

// 以下三個為middleware
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in mil sec
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

// import app routes
const authRoutes = require('./routes/authRoutes');
authRoutes(app);

const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function() {
    console.log('Listening on port %d', server.address().port);
});