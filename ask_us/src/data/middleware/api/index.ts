import * as firebase from "firebase/app";
import "firebase/auth";

import {
  CreateRoomRequestType,
  GetRoomCodeRequestType,
  SetQuestionRequestType
} from "./apiType";

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const STATUS_CODE = {
  success: 200,
  networkError: 511
};

export const googleLoginApi = async () => {
  const response = await firebase.auth().signInWithPopup(GoogleAuthProvider);

  return response.user;
};

export const logoutApi = async () => {
  const response = await firebase.auth().signOut();

  return response;
};

export const createRoomApi = async (payload: CreateRoomRequestType) => {
  const response = await firebase
    .database()
    .ref(`user/`)
    .push({ questionList: {}, ...payload });

  return response;
};

// 질문을 보는 페이지에서 단 한번만 실행하고
// 함수의 return값을 redux-saga으로 받아서 redux에 담고 사용하세요.
// socket처럼 한번만 실행하면 자기혼자 작동해서 계속 데이터를 return해 줍니다.
// setQuestionApi가 실행되면 이 api가 setQuestionApi바로 다음에 실행된다고 생각하면됩니다.
export const enrollmentChiledChangeEventApi = async () =>
  new Promise<{ status: number; data: { [key: string]: string } }>(
    (resolve, reject) => {
      firebase
        .database()
        .ref()
        .child("user/")
        .on("child_changed", response => {
          resolve({ status: 200, data: response.val().questionList });
        });
      reject({ status: 400, message: "네트워크 상태를 확인하여 주십시오." });
    }
  );

// 질문을 보는 페이지에서 단 한번만 실행합니다.
// 질문방의 정보를 가져오는 api입니다.
export const getRoomCodeApi = (payload: GetRoomCodeRequestType) =>
  new Promise<{
    status: number;
    data: {
      questionList: {
        [key: string]: string;
      };
      roomCode: string;
      roomTitle: string;
      userImageUrl: string;
      userName: string;
    };
    dbKey: string;
  }>((resolve, reject) => {
    firebase
      .database()
      .ref("user/")
      .on("value", response => {
        for (const data in response.val()) {
          if (true) {
            const dbData = response.child(data).val();

            if (dbData.roomCode === payload.roomCode) {
              resolve({ status: 200, data: dbData, dbKey: data });
              // dbKey랑 data를 redux에 저장하고 setQuestionApi에서 사용함
            }
          }
        }
        reject({ status: 400, message: "없는 방 입니다." });
      });
  });

// 함수 사용법
// 1. action적고 reducer에 함수 만들기
// 2. redux-saga 사용.
// 3. 함수 파라미터 넣고 사용.
// 이때 questionList는 data.questionList !== undefined ? data.questionList : {}
// 이런식으로 사용.
export const setQuestionApi = async (payload: SetQuestionRequestType) =>
  new Promise<{ status: number; message: string }>((resolve, reject) => {
    const { questionList } = payload;
    const arrayQuestion = Object.keys(questionList);
    const index =
      arrayQuestion.length !== 0
        ? Number(arrayQuestion[arrayQuestion.length - 1]) + 1
        : 0;

    try {
      firebase
        .database()
        .ref(`user/${payload.dbKey}`)
        .update({
          questionList: { ...questionList, [index]: payload.question }
        });
      resolve({ status: 200, message: "질문을 등록하였습니다!" });
    } catch {
      reject({ status: 400, message: "작성한 질문을 확인해주세요." });
    }
  });
