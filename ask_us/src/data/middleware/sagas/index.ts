import { all, call } from "redux-saga/effects";

import authSaga from "./authSaga";
import createSaga from "./createSaga";

export default function* rootSaga() {
  yield all([call(authSaga), call(createSaga)]);
}
