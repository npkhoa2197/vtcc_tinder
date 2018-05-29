import { put, call, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase';
import {
  REGISTER_PENDING,
  REGISTER_FAIL,
  REGISTER_SUCESS,
  REGISTER_REQUEST,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
} from '../constants/strings/actionTypes';

function* registerWithFirebase({ payload }) {
  const { email, password } = payload;
  try {
    yield put({ type: REGISTER_PENDING });
    yield call([firebase.auth(), firebase.auth().createUserWithEmailAndPassword], email, password);
    yield put({ type: REGISTER_SUCESS });
  } catch (e) {
    yield put({ type: REGISTER_FAIL, payload: e.code });
  }
}

export function* watchRegister() {
  yield takeLatest(REGISTER_REQUEST, registerWithFirebase);
}

function* authorizeWithFirebase({ payload }) {
  const { email, password } = payload;
  try {
    yield put({ type: LOGIN_PENDING });
    yield call([firebase.auth(), firebase.auth().signInWithEmailAndPassword], email, password);
    yield put({ type: LOGIN_SUCCESS });
  } catch (e) {
    yield put({ type: LOGIN_FAIL, payload: e.code });
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, authorizeWithFirebase);
}
