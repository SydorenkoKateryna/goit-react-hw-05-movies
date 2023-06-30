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

  display: grid;
  grid-template-columns: repeat(1, minmax(240px, 336px));
  grid-row-gap: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 161px);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(5, 226px);
    grid-column-gap: 21.5px;
  }
`;

export const Item = styled.li`
  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);
  text-transform: uppercase;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 402px;
  object-fit: cover;
  border-radius: 2px;

  @media (min-width: 768px) {
    max-width: 161px;
    width: 100%;
    height: 240px;
  }
  @media (min-width: 1280px) {
    max-width: 226px;
    width: 100%;
    height: 350px;
  }
`;

export const Name = styled.h3`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Character = styled.p``;
