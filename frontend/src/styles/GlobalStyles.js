import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
  }

  h1, h2, h3, h4 { font-family: 'Syne', sans-serif; }

  button { cursor: pointer; border: none; font-family: inherit; }

  input, textarea, select { font-family: inherit; }

  a { text-decoration: none; color: inherit; }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.background}; }
  ::-webkit-scrollbar-thumb { background: ${({ theme }) => theme.border}; border-radius: 3px; }
`;