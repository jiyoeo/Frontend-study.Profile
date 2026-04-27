import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'JoseonGulim';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'OkMallangW';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2603-1@1.0/OkMallangW-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'JoseonGulim', sans-serif;
  }
`;

export default GlobalStyle;
