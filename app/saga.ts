import { fork } from 'redux-saga/effects';
import sessionSaga from './modules/@core/Session/saga';

export default function* mainSaga() {
  yield fork(sessionSaga);
}
