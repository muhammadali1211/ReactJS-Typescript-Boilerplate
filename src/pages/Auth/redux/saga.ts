import axios from "../../../config/axios";
import { all, put, fork, takeLatest, select } from 'redux-saga/effects'
import * as types from './constants'
import { makeSelectAuthToken } from "../../../store/selectors";
import { toast } from 'react-toastify'
import { loginRequestSuccess, registerRequestSuccess } from "./actions";


function* loginRequestSaga({
    type,
    payload,
  }: {
    type: typeof types.LOGIN
    payload: any
  }): any {
    let data = {
      email: payload.email,
      password: payload.password,
      captcha_token: payload.captcha,
    }
  
    try {        
      const response = yield axios.post(`users/login`, data)
      yield put(loginRequestSuccess(response.data.data))    
      toast.success(response.data.message)
      payload.history.push('/')
    } catch (error:any) {
  
    }
  }
  /**
   * Register Saga
   * @param param0 
   */
  function* registerResquestSaga({
    type,
    payload,
  }: {
    type: typeof types.REGISTER
    payload: any
  }): any {
    let data = {
      username: payload.username,
      email: payload.email,
      password: payload.password,
      captcha_token: payload.captcha,
    }
    try {
      const token = yield select(makeSelectAuthToken())
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = yield axios.post(`users/register`, data, headers)
      yield put(registerRequestSuccess(response.data.data))
      payload.resetForm()
      toast.success(response.data.message)
      payload.history.push('/signin')
    } catch (error:any) {

    }
  }
  function* watchLogin() {
    yield takeLatest(types.LOGIN, loginRequestSaga)
  }

  function* watchRegister() {
    yield takeLatest(types.REGISTER, registerResquestSaga)
  }
  export default function* authSaga(){
    yield all([fork(watchLogin), fork(watchRegister)])
  }