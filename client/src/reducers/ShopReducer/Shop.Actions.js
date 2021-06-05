import { shopActionTypes } from "./ShopTypes";


export const fetchCollectionStart = () => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionSuccess = (collections) => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections,
  };
};

export const fetchCollectionFailure = (error) => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error,
  };
};
