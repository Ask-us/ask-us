import * as firebase from "firebase/app";
import "firebase/auth";

import { CreateRoomRequestType } from "./apiType";

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
    .ref("user/")
    .push(payload);

  return response;
};
