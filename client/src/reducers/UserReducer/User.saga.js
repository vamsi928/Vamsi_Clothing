import { takeEvery, put } from "redux-saga/effects";
import { userActionTypes } from "./UserTypes";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
  signOut,
} from "../../firebase/firebase.util";
import {
  SignInFailure,
  SignInSuccess,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess,
} from "./User.actions";
import { clearCart } from "../CartReducer/showCart";

export function* getSnapshotFromUserAuth(user, additionalData) {
  try {
    const userRef = yield createUserProfileDocument(user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccess({ ...userSnapshot.data(), id: userSnapshot.id }));
  } catch (error) {
    yield put(SignInFailure(error.message));
  }
}

export function* googleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeEvery(userActionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

export function* onEmailAndPasswordAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(error.message));
  }
}

export function* onEmailAndPasswordSignIn() {
  yield takeEvery(userActionTypes.EMAIL_SIGN_IN_START, onEmailAndPasswordAsync);
}

export function* onCheckUserSessionAsync() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      return;
    } else {
      yield getSnapshotFromUserAuth(userAuth);
    }
  } catch (error) {
    yield put(SignInFailure(error.message));
  }
}

export function* onCheckUserSession() {
  yield takeEvery(userActionTypes.CHECK_USER_SESSION, onCheckUserSessionAsync);
}

export function* onSignOutAsync() {
  try {
    yield signOut();
    yield put(signOutSuccess());
    yield put(clearCart());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* onSignOutSaga() {
  yield takeEvery(userActionTypes.SIGN_OUT_START, onSignOutAsync);
}

export function* onSignUpAsync({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    console.log(user);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* createSignUpSuccess({ payload: { user, additionalData } }) {
  try {
    yield getSnapshotFromUserAuth(user, additionalData);
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpSuccess() {
  yield takeEvery(userActionTypes.SIGN_UP_SUCCESS,createSignUpSuccess);
}

export function* onSignUpSaga() {
  yield takeEvery(userActionTypes.SIGN_UP_START, onSignUpAsync);
}
