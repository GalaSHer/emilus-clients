import { all } from 'redux-saga/effects';
import Auth from './Auth';
import { watchUserSaga } from './User';

export default function* rootSaga(getState) {
  yield all([
    Auth(),
    watchUserSaga()
  ]);
}
