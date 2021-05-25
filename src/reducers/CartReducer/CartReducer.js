import { userActionTypes } from "../types";
import { addItemToCart,removeItemFromCart, removeSingleItemFromCart } from "../../actions/Cart/Cart.util";

const INITIAL_STATE = { showDropdown: false, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SHOW_DROPDOWN:
      return { ...state, showDropdown: !state.showDropdown };
    case userActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
     case userActionTypes.REMOVE_ITEM:
       return {
         ...state,
         cartItems: removeItemFromCart(state.cartItems, action.payload)
       }
     case userActionTypes.REMOVE_SINGLE_ITEM:
       return {
         ...state,
         cartItems: removeSingleItemFromCart(state.cartItems, action.payload)
       }
    default:
      return state;
  }
};

export default cartReducer;
