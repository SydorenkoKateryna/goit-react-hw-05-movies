import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 16px;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0);
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font-family: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;

  &::placeholder {
    font-family: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 0;
  border-left: 1px solid rgb(0, 0, 0);
  background-color: rgba(250, 170, 32, 0.8);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.03);
    background-color: rgba(250, 170, 32, 1);
  }
`;
