//import { userActionTypes } from "../types";
import { shopActionTypes } from "../ShopReducer/ShopTypes";

const INITIAL_STATE = {
  collections: [],
  isFetching: true,
  errorMessage: "",
};

export const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    default:
      return state;
  }
};
