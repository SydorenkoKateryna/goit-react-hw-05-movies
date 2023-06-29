import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.color};
}
`;
