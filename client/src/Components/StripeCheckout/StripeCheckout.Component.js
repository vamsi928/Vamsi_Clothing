import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IutXdSIgsWxECs9Es8YZpQ1HGjXOANoC0JdKPse8JuEQxChT91NbpPBkWM3bRg3KFMaG0O9DZKNloJUE3IfTazd00KiMzqJwu";

//   const onToken = (token) => {
//     console.log(token);
//     axios
//       ({
//         url: 'payment',
//         method: 'post',
//         data: {
//           amount: priceForStripe,
//           token: token,
//         },
//       })
//       .then((response) => {
//         alert("Payment Successful");
//       })
//       .catch((error) => {
//         console.log(`Payment Error ${JSON.parse(error)}`);
//         alert(
//           "There was an issue with your payment!!, Please make sure you use the provided credit card."
//         );
//       });
//   };

const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
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
    <StripeCheckout
      label="Pay Now"
      name="Vamsi Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      alipay
      bitcoin
      allowRememberMe
    />
  );
};

export default StripeCheckoutButton;
