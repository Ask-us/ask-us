import {
  CREATE_ROOM,
  CREATE_ROOM_ASYNC,
  RESET_STATUS,
  CreateActions
} from "data/actions/create";

interface InitialState {
  isLoading: boolean;
  createRoomStatus: number;
}

const initialState: InitialState = {
  isLoading: false,
  createRoomStatus: 0
};

const authReducer = (
  state = initialState,
  action: CreateActions
): InitialState => {
  switch (action.type) {
    case CREATE_ROOM:
      return {
        ...state,
        isLoading: true,
        createRoomStatus: 200
      };
    case CREATE_ROOM_ASYNC:
      return {
        ...state,
        isLoading: false,
        createRoomStatus: action.payload.status
      };
    case RESET_STATUS:
      return {
        ...state,
        createRoomStatus: 0
      };
    default:
      return state;
  }
};

export default authReducer;
