import styled from 'styled-components';

export const Info = styled.p`
  margin-top: 20px;

  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  margin-top: 20px;
`;

export const Item = styled.li`
  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Author = styled.h3`
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const Review = styled.p``;
