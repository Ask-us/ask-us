import { combineReducers } from "redux";

import auth from "./auth";
import create from "./create";

const appReducer = combineReducers({
  auth,
  create
});

const rootReducer = (state, action) => {
  let resetState = state;

  if (action.type === "LOG_OUT_ASYNC") {
    resetState = undefined;
  }

  return appReducer(resetState, action);
};

export default rootReducer;
