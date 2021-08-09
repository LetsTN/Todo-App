import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 1.125rem;
    font-family: 'Josefin Sans', sans-serif;
    background-color: ${ ({ theme }) => theme.colors.background };
  }
`;