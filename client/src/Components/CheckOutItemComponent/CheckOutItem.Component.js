import React from "react";
import "./CheckOutItem.style.scss";
import { connect } from "react-redux";
import { additem, removeSingleItem, removeitem } from "../../reducers/CartReducer/showCart";

const CheckOutItemComponent = (props) => (
  <span style={{ width: "100%" }}>
    {props.checkOutItems.map((checkOutItem) => (
      <div className="checkout-item" key={checkOutItem.id}>
        <div className="image-container">
          <img src={checkOutItem.imageUrl} alt="item" />
        </div>
        <span className="name">{checkOutItem.name}</span>
        <span className="quantity">
          <span
            style={{ cursor: "pointer", marginRight: "10px" }}
            onClick={() => {
              checkOutItem.quantity === 1
                ? props.removeitem(checkOutItem.id)
                : props.removeSingleItem(checkOutItem);
            }}
          >
            &#10094;
          </span>{" "}
          {checkOutItem.quantity}{" "}
          <span
            style={{ cursor: "pointer", marginLeft: "10px" }}
            onClick={() => props.additem(checkOutItem)}
          >
            &#10095;
          </span>{" "}
        </span>
        <span className="price">{checkOutItem.price}</span>
        <div
          className="remove-button"
          onClick={() => props.removeitem(checkOutItem.id)}
        >
          {" "}
          &#10005;{" "}
        </div>
      </div>
    ))}
  </span>
);

const mapStateToProps = (state) => {
  return { checkOutItems: state.cartReducer.cartItems };
};

export default connect(mapStateToProps, {
  removeitem,
  additem,
  removeSingleItem,
})(CheckOutItemComponent);
