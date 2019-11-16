import * as firebase from "firebase/app";
import "firebase/auth";

export type GoogleLoginResponseType = firebase.User;

export interface ApiPayload<T = null> {
  data?: T;
  status: number;
}
