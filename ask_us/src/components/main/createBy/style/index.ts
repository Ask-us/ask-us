import styled from "styled-components";
import { COLOR } from "src/styles";

export const CreateByWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  hr {
    width: 360px;
    border: 2px solid ${COLOR.white};
    border-radius: 2px;
  }

  p {
    margin-top: 20px;
    color: ${COLOR.white};
    font-size: 12px;
    text-align: center;
  }
`;
