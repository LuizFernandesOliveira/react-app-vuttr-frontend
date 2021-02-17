import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: var(--green-lightest-most);
    color: #170c3a;
  }

  :root {
    --green-darker: #0e995d;
    --green-dark: #10B26C;
    --green: #12DB89;
    --green-light: #88edc4;
    --green-lighter: #b7f7d8;
    --green-lightest: #CFF9E6;
    --green-lightest-most: #e7fbf3;

    --yellow: #FFBB43;

    --white: #FFF;

    --red-dark: #CC4C4C;
    --red: #F95E5A;
  }
`;
