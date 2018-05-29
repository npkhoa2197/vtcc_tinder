import { all } from 'redux-saga/effects';
import { watchRegister, watchLogin } from './loginSagas';

export default function* rootSaga() {
  yield all([watchRegister(), watchLogin()]);
}
