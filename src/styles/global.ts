import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;    
    font-family: ${({ theme }) => theme.fonts.fontFam};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.lightFont};        
  }

  ul,
  li {
    list-style: none;
  }

  input,
  select,
  button {
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  label {
    cursor: pointer;
  }

  fieldset {
    border: none;
  }

  a {
    text-decoration: none;
  }

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    body {    
    font-size: 12px;
  }
  }
`;
