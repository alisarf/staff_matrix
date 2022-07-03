import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --rounded : 10px;
  --row-pad : 10px;
  //greys
  --grey-900 : #FFFFFF;
  --grey-800 : #F9F9F9 ; 
  --grey-700: #EBEBEB;
  --grey-500:#C0C0C0;
  --grey-400 : #A4A4A4;
  --grey-300 :#676767;
  --grey-100: #000000;
  //purples
  --purple-300: #6961F5;
  --purple-200 : #A5A6F6;
  //orange
  --orange-200: #FF906D;
  //fonts
  --font-primary : 'Roboto' , sans-serif;
  --font-accent : 'Nunito', sans-serif;
  }


  * {
    font-family: var(--font-primary);
    box-sizing: border-box;
    color: var(--grey-400);
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;
