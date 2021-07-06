import React from 'react';
import axios from 'axios';
import StripeCheckoutComponent from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = 'pk_test_iAnex3msjdjbPw0d3DQXrFMq00a7jGYVMZ';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: stripePrice,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckoutComponent
    
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={stripePrice}
      panelLabel="Pay Now!"
      token={onToken}
      stripeKey={publishableKey}

    />
  )
}

export default StripeButton;