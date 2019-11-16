import React, { FC } from "react";

import * as S from "./style";
import CreatorButton from "./creatorButton";
import UserButton from "./userButton";
import { useMainRedux } from "container/main";

const ButtonContainer: FC = () => {
  const { authReducerState, authReducerDispatch } = useMainRedux();

  return (
    <S.SettingCenter>
      <CreatorButton loginAction={authReducerDispatch.googleLoginAction} />
      <UserButton openModal={() => console.log("되내?")} />
    </S.SettingCenter>
  );
};

export default ButtonContainer;
