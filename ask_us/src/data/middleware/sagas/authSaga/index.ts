import { fork, put, call, takeLatest, all } from "redux-saga/effects";

import {
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_ASYNC,
  LOG_OUT,
  LOG_OUT_ASYNC,
  GoogleLogin,
  LogOut
} from "actions/auth";
import { googleLoginApi, logoutApi } from "middleware/api";
import { GoogleLoginResponseType } from "middleware/api/apiType";

function* googleLogin() {
  try {
    const response: GoogleLoginResponseType = yield call(googleLoginApi);
    yield put<GoogleLogin>({
      type: GOOGLE_LOGIN_ASYNC,
      payload: {
        data: response,
        status: 200
      }
    });
  } catch (error) {
    yield put({
      type: GOOGLE_LOGIN_ASYNC,
      payload: {
        status: error.code === "auth/network-request-failed" ? 511 : 400
      }
    });
  }
}

function* logout() {
  try {
    yield call(logoutApi);
    yield put<LogOut>({
      type: LOG_OUT_ASYNC,
      payload: {
        status: 200
      }
    });
  } catch (error) {
    yield put<LogOut>({
      type: LOG_OUT,
      payload: {
        status: error.code === "auth/network-request-failed" ? 511 : 400
      }
    });
  }
}

function* watchGoogleLogin() {
  yield takeLatest(GOOGLE_LOGIN, googleLogin);
}

function* watchLogout() {
  yield takeLatest(LOG_OUT, logout);
}

export default function* userSaga() {
  yield all([fork(watchGoogleLogin), fork(watchLogout)]);
}
