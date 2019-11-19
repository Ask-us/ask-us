import { fork, put, call, takeLatest, all } from "redux-saga/effects";

import { CREATE_ROOM, CREATE_ROOM_ASYNC, CreateRoom } from "actions/create";
import { createRoomApi } from "middleware/api";

function* createRoom(action: CreateRoom) {
  try {
    yield call(createRoomApi, action.payload);
    yield put({
      type: CREATE_ROOM_ASYNC,
      payload: {
        status: 200
      }
    });
  } catch (error) {
    yield put({
      type: CREATE_ROOM_ASYNC,
      payload: {
        status: error.response.status
      }
    });
  }
}

function* watchCreateRoom() {
  yield takeLatest(CREATE_ROOM, createRoom);
}

export default function* createSaga() {
  yield all([fork(watchCreateRoom)]);
}
