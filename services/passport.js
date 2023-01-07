const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

// get model class from mongoose
const User = mongoose.model('users');

// turn a mongoose class obj into an id
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user);
        })
});


passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log("[DEBUG] get call back from Google, accessToken = ", accessToken);
        console.log("[DEBUG] profile => ", profile );
        
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                // we already have a record with the progile id
                if (existingUser) {
                    console.log("[DEBUG] user exist");
                    done(null, existingUser);
                } else {
                    // create data and save to MongoDB
                    console.log("[DEBUG] create new user");
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
    })
);
