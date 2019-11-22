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
