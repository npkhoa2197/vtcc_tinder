import { all } from 'redux-saga/effects';
import { watchRegister, watchLogin, watchLogout } from './loginSagas';
import { watchFetchUsers } from './usersSagas';
import { watchFetchActiveMessageRequest } from './chatSagas';

export default function* rootSaga() {
  yield all([
    watchRegister(),
    watchLogin(),
    watchLogout(),
    watchFetchUsers(),
    watchFetchActiveMessageRequest(),
  ]);
}
