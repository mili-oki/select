import styled from 'styled-components';
import { TextVariants } from '../../../styled';

type Props = {
  variant?: keyof TextVariants;
  isDisabled?: boolean;
  isError?: boolean;
};
export const P = styled.p<Props>`
  font-size: ${({ theme, variant }) => theme.text.size[variant!]};
  line-height: ${({ theme, variant }) => theme.text.lineHeight[variant!]};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-family: ${({ theme }) => theme.font.default};
  color: ${({ theme, isDisabled, isError }) =>
    isDisabled
      ? theme.text.color.disabled.primary40
      : isError
      ? theme.color.error.main
      : theme.text.color.primary};
`;

P.defaultProps = {
  variant: 'default'
};
