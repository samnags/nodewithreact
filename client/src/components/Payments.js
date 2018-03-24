import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        currency="USD"
        token={token => {
          console.log(token);
        }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Emaily"
        description="5 Email Credits for $5"
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
