// import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { LOGIN, REGISTER } from '../../constants/actionTypes';

import { loginSuccess, loginError } from './actions';

const loginUserAsync = async (email, password) => {
    return await fetch('https://completefarmer-backend.herokuapp.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: `${this.state.email}`,
        password: `${this.state.password}`
      })
    })
      .then(
          function(responseJson) {
              if(responseJson.ok){
                  return responseJson.json();
              }else{
                  return responseJson.status;
              }
      }, function(error) {
          return error;
      })
};

function* loginUser({payload}){
    const { email, password } = payload.user;
    const { history } = payload;
    try {
        const res = yield call(loginUserAsync, email, password);
        if (res.success) {
           yield put(loginSuccess(res.authUser)); 
        } else {
            yield put(loginError(res.message));
        }
    }catch(error){
        yield put(loginError(error));
    }
}