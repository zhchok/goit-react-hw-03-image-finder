import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    scroll-behavior: smooth;
	   width: 100vw;
     overflow-x: hidden;
  box-sizing: border-box;
  }
  *,
*::before,
*::after {
  box-sizing: inherit;
}
  body {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    background-color: #fff;
    color: #010101;
	 margin: 0px;
  }
  img {
   display: block;
  max-width: 100%;
  height: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
