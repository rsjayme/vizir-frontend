import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html { 
      font-size: 62.5%;
    }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    background: #fff;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }

`;
