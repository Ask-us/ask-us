import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Create from "components/create";
import { createRoom, resetStatus } from "actions/create";
import { AppState } from "data/store";
import {
  CreateRoomRequestType,
  GoogleLoginResponseType
} from "middleware/api/apiType";

interface SelectorProps {
  createRoomStatus: number;
  isLoading: boolean;
  userData: GoogleLoginResponseType;
}

export const useCreateRedux = () => {
  const createReducerState = useSelector<AppState, SelectorProps>(state => ({
    createRoomStatus: state.create.createRoomStatus,
    isLoading: state.create.isLoading,
    userData: state.auth.user
  }));

  const dispatch = useDispatch();
  const createRoomAction = useCallback(
    (payload: CreateRoomRequestType) => {
      dispatch(createRoom(payload));
    },
    [dispatch]
  );
  const resetStatusAction = useCallback(() => {
    dispatch(resetStatus());
  },                                    [dispatch]);

  const createReducerDispatch = {
    createRoomAction,
    resetStatusAction
  };

  return { createReducerState, createReducerDispatch };
};

export default Create;
