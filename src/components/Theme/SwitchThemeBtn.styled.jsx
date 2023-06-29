import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.switchThemeBtnDisable};
  cursor: pointer;

  ${({ disabled, theme }) => {
    if (disabled) {
      return `color:  ${theme.colors.switchThemeBtnActive};`;
    }
  }}

  & + & {
    margin-left: 15px;
  }
`;
