import { cartActionTypes } from "./CartTypes";
import { addItemToCart,removeItemFromCart, removeSingleItemFromCart } from "./Cart.util";

const INITIAL_STATE = { showDropdown: false, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.SHOW_DROPDOWN:
      return { ...state, showDropdown: !state.showDropdown };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
     case cartActionTypes.REMOVE_ITEM:
       return {
         ...state,
         cartItems: removeItemFromCart(state.cartItems, action.payload)
       }
     case cartActionTypes.REMOVE_SINGLE_ITEM:
       return {
         ...state,
         cartItems: removeSingleItemFromCart(state.cartItems, action.payload)
       }
     case cartActionTypes.CLEAR_CART:
       return{
         ...state, cartItems : [], showDropdown: false
       }
    default:
      return state;
  }
};

export default cartReducer;
