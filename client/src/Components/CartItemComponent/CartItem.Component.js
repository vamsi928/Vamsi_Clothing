import React from "react";
import "./CartItem.style.scss";
import { connect } from "react-redux";

class CartItemComponent extends React.Component {


  render() {
    return <div>
        {this.props.cartItems.map(item =>{
           return <div className="cart-item" key={item.id}>
                <img src={item.imageUrl} alt="item"/>
                <div className="item-details">
                    <span className="name">
                        {item.name}
                    </span>
                    <span>{item.quantity} x ${item.price} </span>
                </div>
            </div>
        })}
    </div>;
  }
}

const mapStateToProps = (state) => {
  return { cartItems: state.cartReducer.cartItems };
};

export default connect(mapStateToProps, null)(CartItemComponent);
