const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  // not executing requireLogin. We don't want to run it when express boots up. We're saying run this whenever this request comes in
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: req.body.id,
      description: 'Charge for Emaily'
    });
    // have access to req.user through passport
    req.user.credits += 5;
    // using most up to date model by using user that got requred from async request
    const user = await req.user.save();
    res.send(user);
  });
};
