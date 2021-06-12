import { all } from "redux-saga/effects";
import { onfetchCollectionStart } from "./ShopReducer/Shop.saga";
import {
  onGoogleSignInStart,
  onEmailAndPasswordSignIn, onCheckUserSession, onSignOutSaga, onSignUpSaga, onSignUpSuccess
} from "./UserReducer/User.saga";

export default function* rootSaga() {
  yield all([
    onfetchCollectionStart(),
    onGoogleSignInStart(),
    onEmailAndPasswordSignIn(),
    onCheckUserSession(),
    onSignOutSaga(),
    onSignUpSaga(),
    onSignUpSuccess()
    
  ]);
}
