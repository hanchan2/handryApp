import {all} from 'redux-saga/effects';
import {watcherPlace} from '../sagas/placeSaga';
export default function* reduxSaga() {
  yield all([...watcherPlace]);
}