import React, { FC } from "react";

import * as S from "./style";
import { useCreateRedux } from "container/create";
import loading from "assets/loading.gif";

interface OwnProps {
  title: string;
  code: string;
}

const SubmitButton: FC<OwnProps> = ({ title, code }) => {
  const {
    createReducerState: { isLoading, userData },
    createReducerDispatch: { createRoomAction }
  } = useCreateRedux();

  return (
    <S.ButtonWrapper isActive={!!(title && code)}>
      {isLoading ? (
        <img src={loading} alt="로딩 중" />
      ) : (
        <button
          onClick={() =>
            !!(title && code) &&
            createRoomAction({
              roomTitle: title,
              roomCode: code,
              userImageUrl: userData.photoURL,
              userName: userData.displayName
            })
          }
        >
          생성하기
        </button>
      )}
    </S.ButtonWrapper>
  );
};

export default SubmitButton;
