import React from 'react';
import StripeCheckoutComponent from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = 'pk_test_iAnex3msjdjbPw0d3DQXrFMq00a7jGYVMZ';

  const onToken = token => {
    console.log(token);
    alert(`Paid $${price} To Crown Clothing Ltd.`)
  }

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