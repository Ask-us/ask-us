import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Main from "components/main";
import { googleLogin } from "actions/auth";
import { AppState } from "data/store";

interface SelectorType {
  loginStatus: number;
}

export const useMainRedux = () => {
  const dispatch = useDispatch();

  const authReducerState = useSelector<AppState, SelectorType>(state => ({
    loginStatus: state.auth.loginStatus
  }));

  const googleLoginAction = useCallback(() => {
    dispatch(googleLogin());
  },                                    [dispatch]);

  const authReducerDispatch = {
    googleLoginAction
  };

  return { authReducerState, authReducerDispatch };
};

export default Main;
