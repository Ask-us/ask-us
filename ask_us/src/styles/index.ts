import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme
} from "styled-components";
import Font from "assets/font/NanumSquareL.ttf";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  /* css initialize */
  html, body {
    width: 100%;
    min-width: 1024px;
    font-family: ${Font};
  }
  input {
    &:-webkit-autofill {
      box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.8) inset;
    }
    border: solid 1px #ffa2c0;
    border-radius: 5px;
    &[type=password] {
    font-family: sans-serif;
    }
    &:focus {
      outline: none;
    }
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  a {
    &:link{
      text-decoration: none;
    }
    &:visited{
      text-decoration: none;
    }
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  div {
    &::-webkit-scrollbar {
      width: 6px;
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      width: 6px;
      background: rgb(160, 160, 160);
    }
  }
  .rotate{
    transform: rotate(180deg);
  }
  
  .btn{
    display: inline-block;
    transition: 0.5s;
  }
`;

export const COLOR = {
  basic: "#7983cb" as const,
  border: {
    active: "#00cbff" as const,
    disable: "rgba(0, 203, 255, 0.2)" as const
  },
  sub: "#8d98ff" as const,
  white: "#f7f7f7" as const,
  defaultOutline: "rgb(0, 150, 255)" as const,
  gray: "#959595" as const
};

export default GlobalStyle;
