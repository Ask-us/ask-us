import { CreateRoomRequestType, ApiPayload } from "middleware/api/apiType";

export const CREATE_ROOM = "CREATE_ROOM" as const;
export const CREATE_ROOM_ASYNC = "CREATE_ROOM_ASYNC" as const;
export const RESET_STATUS = "RESET_STATUS" as const;

export interface CreateRoom {
  type: typeof CREATE_ROOM | typeof CREATE_ROOM_ASYNC;
  payload: CreateRoomRequestType & ApiPayload;
}

export interface ResetStatus {
  type: typeof RESET_STATUS;
}

export type CreateActions = CreateRoom | ResetStatus;

export const createRoom = (payload: CreateRoomRequestType): CreateActions => ({
  payload,
  type: CREATE_ROOM
});

export const resetStatus = (): CreateActions => ({
  type: RESET_STATUS
});
