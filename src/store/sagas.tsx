import { all, fork } from 'redux-saga/effects'
import authSaga from '../pages/Auth/redux/saga'
export function* rootSaga(){
    yield all([authSaga()])
}