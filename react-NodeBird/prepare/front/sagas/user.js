import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import {
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_IN_REQUEST,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  LOG_OUT_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
} from '../reducers/user';

function logInAPI(data) {
  return axios.post('/api/login', data);
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function signUpAPI() {
  return axios.post('/api/signup');
}

function* logIn(action) {
  try {
    console.log('saga logIn');
    yield delay(1000);
    // const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* logOut() {
  try {
    console.log('saga logOut');
    yield delay(1000);
    // const result = yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* signUp() {
  try {
    console.log('saga signUp');
    yield delay(1000);
    // const result = yield call(signUpAPI);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}

function* watchSignUp() {
  yield takeLatest('SIGN_UP_REQUEST', signUp);
}

export default function* userSage() {
  yield all([fork(watchLogIn), fork(watchLogOut, fork(watchSignUp))]);
}
