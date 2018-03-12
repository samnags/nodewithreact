const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
// Takes cookie and adds a session key to the request object

const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
// Have to require model User first passport is trying to access the user model but it doesn't exist until you load up model
require('./services/passport');
// Have to require passportConfig index but because we're not executing it. We can just do a require statement

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// Express/Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
// authRoutes is exporting an a function. Here we're executing that function with the argument of app

const PORT = process.env.PORT || 5000;
// Heroku will set env vironments that they'll pass us on runtime.

app.listen(PORT);
console.log('Running on port', PORT);
