import { takeLatest, call, put } from 'redux-saga/effects';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';
import shopActionsTypes from './shop.types';


export function* fetchCollectionsAsync() {
  yield console.log('I am fired');

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  }
  catch (error) {
    yield put(fetchCollectionsFailure(collectionMap));
  }
}

export function* fetchCollectionsStart() {
  takeLatest(
    shopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}