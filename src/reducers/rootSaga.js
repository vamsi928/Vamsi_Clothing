import { all } from "redux-saga/effects";
import { fetchCollectionStart } from "./ShopReducer/Shop.saga";
import {
  onGoogleSignInStart,
  onEmailAndPasswordSignIn, onCheckUserSession, onSignOutSaga, onSignUpSaga, onSignUpSuccess
} from "./UserReducer/User.saga";

export default function* rootSaga() {
  yield all([
    fetchCollectionStart(),
    onGoogleSignInStart(),
    onEmailAndPasswordSignIn(),
    onCheckUserSession(),
    onSignOutSaga(),
    onSignUpSaga(),
    onSignUpSuccess()
    
  ]);
}
