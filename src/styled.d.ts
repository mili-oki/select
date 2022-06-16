import 'styled-components';

export type TextVariants = {
  xl: string;
  lg: string;
  default: string;
  sm: string;
};

export type ColorVariantTypes = {
  dark: string;
  main: string;
  light: string;
  shades50: string;
  shades30: string;
  shades12: string;
};
export type ColorVariants = {
  greyScale: ColorVariantTypes;
  primary: ColorVariantTypes;
  success: ColorVariantTypes;
  error: ColorVariantTypes;
  warning: ColorVariantTypes;
  info: ColorVariantTypes;
  border: {
    outline: string;
  };
};

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      paper: string;
      default: string;
    };
    font: {
      default: string;
    };
    fontWeight: {
      bold: number;
      semiBold: number;
      normal: number;
    };
    color: ColorVariants;
    text: {
      size: TextVariants;
      lineHeight: TextVariants;
      color: {
        primary: string;
        seconadry: string;
        disabled: {
          primary4: string;
          primary12: string;
          primary40: string;
          seconadry18: string;
        };
        action: {
          active: string;
          hover: string;
          selected: string;
          disabled: string;
          disabledBackground: string;
          focus: string;
        };
      };
    };
  }
}
