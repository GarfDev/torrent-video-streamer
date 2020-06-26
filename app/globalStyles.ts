import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    margin: 0px;
    padding: 0px;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #app {

    background-color: white;
    min-height: 100%;
    min-width: 100%;
  }
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  ::-moz-selection { /* Code for Firefox */
      color: white;
      background: pink;
    }

  ::selection {
    color: white;
    background: pink;
  }

`;

export default GlobalStyle;
