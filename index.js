const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
// Takes cookie and adds a session key to the request object

const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
// Have to require model User first passport is trying to access the user model but it doesn't exist until you load up model
require('./services/passport');
// Have to require passportConfig index but because we're not executing it. We can just do a require statement

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

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
require('./routes/billingRoutes')(app);
// authRoutes is exporting an a function. Here we're executing that function with the argument of app

if (process.env.NODE_ENV == 'production') {
  // Make sure Express serves production assets like main.js
  // Searching for specific files first then moves onto below
  app.use(express.static('client/build'));

  // Makes sure that Express servers index.js /react routes if it doesn't recognize route
  // If there's nothing in authRouthes, billRouthes, look above, then hit below catchall
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
// Heroku will set env vironments that they'll pass us on runtime.

app.listen(PORT);
console.log('Running on port', PORT);
