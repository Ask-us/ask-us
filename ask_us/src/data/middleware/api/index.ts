import * as firebase from "firebase/app";
import "firebase/auth";

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const googleLoginApi = async () => {
  const response = await firebase.auth().signInWithPopup(GoogleAuthProvider);

  return response.user;
};

export const logoutApi = async () => {
  const response = await firebase.auth().signOut();

  return response;
};
