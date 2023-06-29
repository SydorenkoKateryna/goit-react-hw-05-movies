import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 60px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(240px, 336px));
  grid-row-gap: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 336px);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 395px);
    grid-column-gap: 16px;
    grid-row-gap: 32px;
  }
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 2 10px rgba(0, 0, 0, 0.4);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 402px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 455px;
  }
  @media (min-width: 1280px) {
    height: 574px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 32px;
  }
`;

export const InfoWrapper = styled.div`
  padding: 16px 8px;
`;

export const SecondTitle = styled.h2`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.color};

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;
