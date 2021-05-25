import React from 'react';
import './CartIcon.style.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import { showCart } from "../../actions/Cart/showCart";
import { selectCartItemsCount } from '../../actions/Cart/Cart.selector';

const CartIcon = (props) =>(
    <div className="cart-icon" onClick={() => props.showCart()}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count"> {props.itemsCount} </span>
    </div>
)




const mapStateToProps = (state) =>{
    console.log(state);
    return {itemsCount : selectCartItemsCount(state)} //reselect selector for memoization... 
}

export default connect(mapStateToProps,{showCart})(CartIcon);