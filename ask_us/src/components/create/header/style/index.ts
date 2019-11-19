import styled from "styled-components";

import Logo from "assets/Logo.png";

export const Header = styled.div`
  background: -webkit-linear-gradient(left, #7983cb 0%, #00cbff 100%);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 115px;
    height: 26px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: -5px -110px;
  }
`;
