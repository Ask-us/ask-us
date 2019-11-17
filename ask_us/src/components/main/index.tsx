import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./style";
import { SafeLine } from "components/common";
import ButtonContainer from "./buttonContainer";
import IntroductoryPhrase from "./introductoryPhrase";
import CreateBy from "./createBy";
import { useMainRedux } from "container/main";
import { checkStatus } from "utils/checkers";
import { STATUS_CODE } from "middleware/api";

const Main: FC = () => {
  const { push } = useHistory();
  const {
    authReducerState: { loginStatus },
    authReducerDispatch: { resetStatusAction }
  } = useMainRedux();

  useEffect(() => {
    if (checkStatus(loginStatus, STATUS_CODE.success)) {
      push("/create");
      resetStatusAction();
      return;
    }
  },        [loginStatus]);

  return (
    <S.Wrapper>
      <SafeLine>
        <IntroductoryPhrase />
        <ButtonContainer />
        <CreateBy />
      </SafeLine>
    </S.Wrapper>
  );
};

export default Main;
