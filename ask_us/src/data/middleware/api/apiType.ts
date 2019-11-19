import * as firebase from "firebase/app";
import "firebase/auth";

export type GoogleLoginResponseType = firebase.User;
export type CreateRoomResponseType = firebase.database.Reference;

export interface CreateRoomRequestType {
  roomTitle: string;
  roomCode: string;
  userImageUrl: string;
  userName: string;
}

export interface ApiPayload<T = null> {
  data?: T;
  status?: number;
}
