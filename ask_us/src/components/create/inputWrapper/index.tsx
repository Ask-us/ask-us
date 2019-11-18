import React, { FC } from "react";

import { Input } from "components/common";

interface OwnProps {
  title: string;
  setTitleHandler: (title: string) => void;
  code: string;
  setCodeHandler: (code: string) => void;
}

const InputWrapper: FC<OwnProps> = ({
  title,
  setTitleHandler,
  code,
  setCodeHandler
}) => (
  <>
    <Input
      title="질문방 제목"
      placeholder="ooo행사"
      widthSize={400}
      value={title}
      setValue={setTitleHandler}
      questionContent="행사의 제목을 입력해주세요!"
      isMb
    />
    <Input
      title="인증 코드"
      placeholder="1234"
      widthSize={400}
      value={code}
      setValue={setCodeHandler}
      questionContent="질문방에 입장하기위한 코드를 입력해주세요!"
      isMb
    />
  </>
);

export default InputWrapper;
