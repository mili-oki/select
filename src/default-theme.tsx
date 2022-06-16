import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  background: {
    paper: '#FFFFFF',
    default: '#2C397F'
  },
  font: {
    default: 'Roboto, sans-serif'
  },
  fontWeight: {
    bold: 700,
    semiBold: 500,
    normal: 400
  },
  color: {
    primary: {
      dark: '#2C397F',
      main: '#3F51B5',
      light: '#6574C4',
      shades50: '#3F51B580',
      shades30: '#3F51B54D',
      shades12: '#3F51B51F'
    },
    greyScale: {
      dark: '#182049',
      main: '#5F637E',
      light: '#8C8EA3',
      shades50: '#D1D2DB',
      shades30: '#FAFDFE',
      shades12: '#FFFEFF'
    },
    success: {
      dark: '#185540',
      main: '#3CD4A0',
      light: '#63DDB3',
      shades50: '#3CD4A080',
      shades30: '#3CD4A04D',
      shades12: '#3CD4A01F'
    },
    error: {
      dark: '',
      main: '#D73652',
      light: '',
      shades50: '#D7365280',
      shades30: '#D736524D',
      shades12: '#D736521F'
    },
    warning: {
      dark: '',
      main: '',
      light: '',
      shades50: '',
      shades30: '',
      shades12: ''
    },
    info: {
      dark: '#2253FF',
      main: '#2253FF',
      light: '#2253FF',
      shades50: '#2253FF80',
      shades30: '#2253FF4D',
      shades12: '#2253FF1F'
    },
    border: {
      outline: 'rgba(25, 32, 72, 0.23)'
    }
  },
  text: {
    size: {
      xl: '24px',
      lg: '18px',
      default: '14px',
      sm: '12px'
    },
    lineHeight: {
      xl: '28px',
      lg: '24px',
      default: '20px',
      sm: '16px'
    },
    color: {
      primary: '#192048',
      seconadry: '#5E637F',
      disabled: {
        primary4: 'rgba(25, 32, 72, 0.04)',
        primary12: 'rgba(25, 32, 72, 0.12)',
        primary40: 'rgba(25, 32, 72, 0.5)',
        seconadry18: 'rgba(25, 32, 72, 0.18)'
      },
      action: {
        active: 'rgba(25, 32, 72, 0.54',
        hover: ' rgba(63, 81, 181, 0.04)',
        selected: 'rgba(63, 81, 181, 0.08)',
        disabled: 'rgba(25, 32, 72, 0.26)',
        disabledBackground: 'rgba(25, 32, 72, 0.12)',
        focus: 'rgba(63, 81, 181, 0.12)'
      }
    }
  }
};
