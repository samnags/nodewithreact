const express = require('express');
const app = express();

app.get('/', (req, rhees) => {
    res.send({ hi: 'there'})
})

const PORT = process.env.port || 5000
// Heroku will set env vironments that they'll pass us on runtime.

app.listen(PORT)
console.log('Running on port', PORT)