import React, { FC, useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./style";
import { SafeLine } from "components/common";
import InputWrapper from "./inputWrapper";
import Header from "./header";
import SubmitButton from "./submitButton";
import { useCreateRedux } from "container/create";
import { checkStatus } from "utils/checkers";
import { STATUS_CODE } from "middleware/api";

const Create: FC = () => {
  const { push } = useHistory();
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const setTitleHandler = useCallback((title: string) => {
    setTitle(title);
  },                                  []);

  const setCodeHandler = useCallback((code: string) => {
    setCode(code);
  },                                 []);

  const {
    createReducerState: { createRoomStatus, userData },
    createReducerDispatch: { resetStatusAction }
  } = useCreateRedux();

  useEffect(() => {
    if (userData === null) {
      // popup만들고 교체
      alert("로그인 후 입장하실 수 있습니다.");
      push("/");
    }
  },        [userData]);

  useEffect(() => {
    if (checkStatus(createRoomStatus, STATUS_CODE.success)) {
      // popup만들고 교체
      alert("생성이 완료되었습니다.");
      push("/");
      resetStatusAction();
    }
  },        [createRoomStatus]);

  return (
    <S.Wrapper>
      <Header />
      <SafeLine>
        <S.Title>지금 질문방을 완성하세요.</S.Title>
        <InputWrapper
          title={title}
          setTitleHandler={setTitleHandler}
          code={code}
          setCodeHandler={setCodeHandler}
        />
        <SubmitButton title={title} code={code} />
      </SafeLine>
    </S.Wrapper>
  );
};

export default Create;
