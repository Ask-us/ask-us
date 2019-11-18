import styled from "styled-components";

import { COLOR } from "src/styles";

interface InputWrapperProps {
  isMb: boolean;
  widthSize: number;
  questionContent: string;
  isHover: boolean;
}
export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ isMb }) => isMb && "margin-bottom: 30px"};
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: ${({ widthSize }) => `${widthSize}px`};
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      margin-bottom: 12px;
      position: relative;

      img {
        height: 16px;
        width: 16px;
        cursor: pointer;
      }

      &::after {
        content: ${({ questionContent, isHover }) =>
          isHover && `"${questionContent}"`};
        width: max-content;
        max-width: 280px;
        border: 1px solid #7983cb;
        border-radius: 3px;
        box-sizing: border-box;
        padding: 5px;
        background: #fff;
        font-size: 14px;
        line-height: 1.4;
        letter-spacing: 2px;
        position: absolute;
        right: 25px;
        top: -8px;
      }
    }
  }
`;

export const Input = styled.input`
  height: 22px;
  padding: 10px;
  font-size: 14px;

  &::placeholder {
    color: ${COLOR.gray};
  }
`;
