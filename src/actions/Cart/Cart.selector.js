import { createSelector } from "reselect";

const selectCart = (state) => state.cartReducer;

const selectCartItems = createSelector(
  [selectCart],
  (cartReducer) => cartReducer.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulaterQuantity, currentItem) =>
        accumulaterQuantity + currentItem.quantity,
      0
    )
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulaterPrice,cartItem) => accumulaterPrice + cartItem.price * cartItem.quantity,0)
);