import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from 'redux/constants/User';


const fetchUsersFromAPI = () => axios.get('https://jsonplaceholder.typicode.com/users');

function* fetchUsersSaga() {
  try {
    const response = yield call(fetchUsersFromAPI);
    yield put({ type: FETCH_USERS_SUCCESS, users: response.data });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, error: error.message });
  }
}

export function* watchUserSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
