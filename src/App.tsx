import React from 'react';
import { ThemeProvider } from 'styled-components';
import Selective from './components/extended/Selective/Selective';
import { defaultTheme } from './default-theme';
import { GlobalStyles } from './config/global-styles';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Selective />
    </ThemeProvider>
  );
};

export default App;
