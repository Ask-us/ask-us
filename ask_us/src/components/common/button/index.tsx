import React, { FC } from "react";

import * as S from "./style";

interface OwnProps {
  title: string;
  content: {
    isImage: boolean;
    value: string;
  };
}

const Button: FC<OwnProps> = ({ title, content: { isImage, value } }) => {
  return (
    <S.Button>
      <p>{title}</p>
      {isImage ? <img src={value} alt="이미지" /> : <span>{value}</span>}
    </S.Button>
  );
};

export default Button;
