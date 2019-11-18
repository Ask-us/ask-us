import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./style";

const Header: FC = () => {
  const { push } = useHistory();
  return (
    <S.Header>
      <div onClick={() => push("/")} className="Logo" />
    </S.Header>
  );
};

export default Header;
