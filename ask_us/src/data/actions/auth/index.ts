import {
  GoogleLoginResponseType,
  ApiPayload
} from "data/middleware/api/apiType";

export const GOOGLE_LOGIN = "GOOGLE_LOGIN" as const;
export const GOOGLE_LOGIN_ASYNC = "GOOGLE_LOGIN_ASYNC" as const;
export const LOG_OUT = "LOG_OUT" as const;
export const LOG_OUT_ASYNC = "LOG_OUT_ASYNC" as const;
export const RESET_STATUS = "RESET_STATUS" as const;

export interface GoogleLogin {
  type: typeof GOOGLE_LOGIN | typeof GOOGLE_LOGIN_ASYNC;
  payload?: ApiPayload<GoogleLoginResponseType>;
}

export interface LogOut {
  type: typeof LOG_OUT | typeof LOG_OUT_ASYNC;
  payload?: ApiPayload;
}

export interface ResetStatus {
  type: typeof RESET_STATUS;
}

export type AuthActions = GoogleLogin | LogOut | ResetStatus;

export const googleLogin = (): AuthActions => ({
  type: GOOGLE_LOGIN
});

export const logOut = (): AuthActions => ({
  type: LOG_OUT
});

export const resetStatus = (): AuthActions => ({
  type: RESET_STATUS
});
