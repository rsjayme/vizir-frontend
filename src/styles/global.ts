import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html { 
      font-size: 62.5%;
    }


  @media (max-width: 1200px) {
    html {
      font-size: 58%;
    }
  }

  @media (max-width: 960px) {
    html {
      font-size: 55%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 50%;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    background: #fff;
    font-size: 1.8rem;
  }

  button {
    cursor: pointer;
  }

`;
