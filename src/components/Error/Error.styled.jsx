import styled from 'styled-components';

export const Message = styled.strong`
  display: block;
  padding-top: 20px;
  padding-bottom: 40px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.colors.color};

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 60px;
    font-size: 32px;
  }

  @media (min-width: 1280px) {
    font-size: 40px;
  }
`;
