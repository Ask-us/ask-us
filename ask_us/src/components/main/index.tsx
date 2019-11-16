import React, { FC } from "react";

import * as S from "./style";
import { SafeLine } from "components/common";
import ButtonContainer from "./buttonContainer";
import IntroductoryPhrase from "./introductoryPhrase";
import CreateBy from "./createBy";

const Main: FC = () => {
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
