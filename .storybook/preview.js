import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/default-theme';

const themes = () => [defaultTheme];
addDecorator(withThemesProvider(themes()), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      {
        name: 'theme',
        value: '#F1F4F6',
      },
      {
        name: 'white',
        value: '#ffffff'
      },
      {
        name: 'black',
        value: '#000000'
      }
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}