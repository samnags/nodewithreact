const passport = require('passport'); // requring passport module

module.exports = app => {
  // First argument of Google tells passport to use GoogleStrategy
  // Scope tells Google what access of user profile we want from them
  // 1 - User clicks log in. Passport sends request to Google
  // 2 - Google asks for permission.
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // 3 - User grants permission. Google sends back code.
  // 4 - Passport takes code and sends requst back to Google with code
  // 5 - Google sees code and responds back with info about the user. That's when we hit above callback function
  app.get('/auth/google/callback', passport.authenticate('google'));
};
