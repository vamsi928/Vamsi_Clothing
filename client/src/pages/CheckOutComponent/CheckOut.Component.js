import React from "react";
import "./CheckOut.style.scss";
import CheckOutItemComponent from "../../Components/CheckOutItemComponent/CheckOutItem.Component";
import { selectCartItemsTotalPrice } from "../../reducers/CartReducer/Cart.selector";
import StripeCheckoutButton from '../../Components/StripeCheckout/StripeCheckout.Component';
import { connect } from "react-redux";

const CheckOutPage = (props) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    <CheckOutItemComponent />
    <div className="total">TOTAL : ${props.totalPrice}</div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
       4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </div>
    <StripeCheckoutButton price={props.totalPrice} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    totalPrice: selectCartItemsTotalPrice(state),
  };
};

export default connect(mapStateToProps, null)(CheckOutPage);
