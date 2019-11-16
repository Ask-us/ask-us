import styled from "styled-components";
import { COLOR } from "src/styles";

export const IntroductoryPhraseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 188px;

  img {
    width: 130px;
    height: 152px;
    margin-bottom: 4px;
  }

  p {
    font-size: 16px;
    color: ${COLOR.white};
    margin-bottom: 7px;
  }
`;
