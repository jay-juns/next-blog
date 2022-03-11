import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme } : {theme: any}) => theme.body};
    color: ${({ theme } : {theme: any}) => theme.text};
    transition: all 0.25s linear;
  }
  a, 
  p, 
  button {
    color: ${({ theme } : {theme: any}) => theme.text};
  }
  .right-nav > span.active > a,
  .left-nav > ul > li.active > a {
    color: ${({ theme } : {theme: any}) => theme.textActive};
    font-weight: 700;
  }
  .footer {
    background-color: ${({ theme } : {theme: any}) => theme.footerBg};
    border-top: 1px solid ${({ theme } : {theme: any}) => theme.borderColor};
  }
`;