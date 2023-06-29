import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 20px;

  @media (min-width: 768px) {
    padding-top: 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.formBackground};
  border: ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.5),
    0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font-family: inherit;
  font-size: 12px;
  border: none;
  outline: none;
  padding: 0px 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.color};

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  &::placeholder {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 0;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.formBackground};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.2);
  }
`;
