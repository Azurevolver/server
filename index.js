// import syntax with commonJS module
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
const PORT = process.env.PORT || 5000;

// rounte handler
passport.use(new GoogleStrategy());

var server = app.listen(PORT, function() {
    console.log('Listening on port %d', server.address().port);
});