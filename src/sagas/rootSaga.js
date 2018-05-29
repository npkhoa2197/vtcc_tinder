import { all } from 'redux-saga/effects';
import { watchRegister, watchLogin, watchLogout } from './loginSagas';

export default function* rootSaga() {
  yield all([watchRegister(), watchLogin(), watchLogout()]);
}
