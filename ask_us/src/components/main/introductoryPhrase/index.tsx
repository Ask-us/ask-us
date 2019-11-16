import React, { FC } from "react";

import * as S from "./style";
import Logo from "assets/Logo.png";

const IntroductoryPhrase: FC = () => {
  return (
    <S.IntroductoryPhraseWrapper>
      <img src={Logo} alt="로고" />
      <p>컨퍼런스에서 손 쉽게!</p>
      <p>익명으로 자유롭게 질문할 수 있습니다.</p>
    </S.IntroductoryPhraseWrapper>
  );
};

export default IntroductoryPhrase;
