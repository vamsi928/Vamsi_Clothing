import { shopActionTypes } from "./ShopTypes";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  firestore,
  storeCollectionSnapshotData,
} from "../../firebase/firebase.util";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./Shop.Actions";

export function* fetchCollectionsAsync() {
  yield console.log("Hello!!");
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const shopData = yield call(storeCollectionSnapshotData, snapShot);
    yield put(fetchCollectionSuccess(shopData));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
