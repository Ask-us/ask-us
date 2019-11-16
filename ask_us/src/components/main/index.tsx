import React, { FC } from "react";

import * as S from "./style";
import { SafeLine } from "components/common";
import ButtonContainer from "./googleLogin";

const Main: FC = () => {
  return (
    <S.Wrapper>
      <SafeLine>
        <ButtonContainer />
      </SafeLine>
    </S.Wrapper>
  );
};

export default Main;
