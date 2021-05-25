import React from 'react';
import './CartDropdown.style.scss';
import CustomButton from '../Custom-button/Custom-button.Component';
import CartItemComponent from '../CartItemComponent/CartItem.Component';
import { connect } from 'react-redux';
import history from '../../history';
import { showCart } from '../../actions/Cart/showCart';
class CartDropdown extends React.Component{

    render(){
        return (
            <div className="cart-dropdown">
                <div className="cart-items">
                {this.props.cartItems ? <CartItemComponent /> : <span className="empty-message">Your Cart is empty</span>}
                </div>
                <CustomButton  type="button" onClick={() => {history.push('/checkout'); this.props.showCart()}}>GO TO CHECKOUT</CustomButton>
            </div>
        )
    }
}


const mapStateToProps = state => (
     {cartItems : state.cartReducer.cartItems.length}
)

export default connect(mapStateToProps,{showCart})(CartDropdown);