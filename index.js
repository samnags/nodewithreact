const express = require('express');
require('./services/passport');
// Have to require passportConfig index but because we're not executing it. We can just do a require statement

const app = express();

require('./routes/authRoutes')(app);
// authRoutes is exporting an a function. Here we're executing that function with the argument of app

const PORT = process.env.PORT || 5000;
// Heroku will set env vironments that they'll pass us on runtime.

app.listen(PORT);
console.log('Running on port', PORT);
