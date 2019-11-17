import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Main from "components/main";
import { googleLogin, resetStatus } from "actions/auth";
import { AppState } from "data/store";

interface SelectorType {
  loginStatus: number;
}

export const useMainRedux = () => {
  const authReducerState = useSelector<AppState, SelectorType>(state => ({
    loginStatus: state.auth.loginStatus
  }));

  const dispatch = useDispatch();
  const googleLoginAction = useCallback(() => {
    dispatch(googleLogin());
  },                                    [dispatch]);
  const resetStatusAction = useCallback(() => {
    dispatch(resetStatus());
  },                                    [dispatch]);

  const authReducerDispatch = {
    googleLoginAction,
    resetStatusAction
  };

  return { authReducerState, authReducerDispatch };
};

export default Main;
