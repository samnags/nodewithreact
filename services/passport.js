const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
// passing a single argument to model means we're retreiving it

// Takes user model and creates a unique identifer
passport.serializeUser((user, done) => {
  // user.id references the ID assigned by Mongo record
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// passing a new instance of GS to passport
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // reaching out to mongo is always an async request
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // tells Passport that we're finished and here is user
        return done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
