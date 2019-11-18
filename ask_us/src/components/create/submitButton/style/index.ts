import styled from "styled-components";

import { COLOR } from "src/styles";

export const ButtonWrapper = styled.div<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin-top: 30px;
    width: 30px;
    height: 30px;
  }

  > button {
    all: unset;
    margin-top: 30px;
    width: 400px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    font-size: 18px;
    background: ${({ isActive }) =>
      isActive ? COLOR.basic.default : "rgba(141, 152, 255, 0.5)"};
    color: ${({ isActive }) => (isActive ? COLOR.white : COLOR.gray)};
    cursor: ${({ isActive }) => (isActive ? "pointer" : "default")};

    &:hover {
      background: ${({ isActive }) => isActive && COLOR.basic.hover};
    }

    &:active {
      background: ${({ isActive }) => isActive && COLOR.basic.active};
    }

    &:focus {
      outline: 1px solid
        ${({ isActive }) => (isActive ? COLOR.defaultOutline : "transparent")};
    }
  }
`;
