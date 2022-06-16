import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => `
  body {
    background: ${theme.background.paper};
    font-family: ${theme.font.default};
  }
`
);
