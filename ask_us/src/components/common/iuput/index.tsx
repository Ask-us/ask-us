import React, { FC, useState, useCallback } from "react";

import * as S from "./style";
import questionMark from "assets/questionMark.png";

interface OwnProps {
  isMb?: boolean;
  title: string;
  widthSize: number;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  questionContent: string;
}

const Input: FC<OwnProps> = ({
  isMb,
  widthSize,
  title,
  placeholder,
  value,
  setValue,
  questionContent
}) => {
  const [isHover, setIsHover] = useState(false);

  const setIsHoverHandler = useCallback((isHover: boolean) => {
    setIsHover(isHover);
  },                                    []);

  return (
    <S.InputWrapper
      isMb={isMb}
      widthSize={widthSize}
      questionContent={questionContent}
      isHover={isHover}
    >
      <div>
        <div>
          <p>{title}</p>
          <img
            onMouseOver={() => setIsHoverHandler(true)}
            onMouseOut={() => setIsHoverHandler(false)}
            src={questionMark}
            alt="도움말"
          />
        </div>
        <S.Input
          type="text"
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          placeholder={placeholder}
        />
      </div>
    </S.InputWrapper>
  );
};

export default Input;
