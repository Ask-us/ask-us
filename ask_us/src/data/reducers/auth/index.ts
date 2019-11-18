import {
  GOOGLE_LOGIN_ASYNC,
  LOG_OUT_ASYNC,
  RESET_STATUS,
  AuthActions
} from "data/actions/auth";
import { GoogleLoginResponseType } from "data/middleware/api/apiType";

interface InitialState {
  user: GoogleLoginResponseType;
  loginStatus: number;
  logoutStatus: number;
}

const initialState: InitialState = {
  user: null,
  loginStatus: 0,
  logoutStatus: 0
};

const authReducer = (
  state = initialState,
  action: AuthActions
): InitialState => {
  switch (action.type) {
    case GOOGLE_LOGIN_ASYNC:
      return {
        ...state,
        user: action.payload.data,
        loginStatus: action.payload.status
      };
    case LOG_OUT_ASYNC:
      return {
        ...state,
        user: null,
        logoutStatus: action.payload.status
      };
    case RESET_STATUS:
      return {
        ...state,
        loginStatus: 0,
        logoutStatus: 0
      };
    default:
      return state;
  }
};

export default authReducer;
