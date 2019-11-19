import styled from "styled-components";

import { COLOR } from "styles/index";

export const Button = styled.button`
  all: unset;
  width: 360px;
  height: 60px;
  font-weight: bold;
  border: 2px solid ${COLOR.border.disable};
  border-radius: 32px;
  background: #fff;
  margin-top: 30px;
  box-sizing: border-box;
  padding: 0 25px 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s;
  cursor: pointer;

  > p {
    font-size: 16px;
  }

  > span {
    font-size: 13px;
    color: ${COLOR.gray};
  }

  > img {
    width: 46px;
    height: 46px;
  }

  &:hover {
    border: 2px solid ${COLOR.border.active};

    span {
      color: ${COLOR.basic.default};
    }
  }

  &:focus {
    outline: 1px solid ${COLOR.defaultOutline};
  }
`;
