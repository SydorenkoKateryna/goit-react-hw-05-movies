import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 60px;
  }
`;

export const MovieWrapper = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 402px;
  object-fit: cover;
  border-radius: 2px;

  @media (min-width: 768px) {
    max-width: 303px;
    width: 100%;
    height: 455px;
  }
  @media (min-width: 1280px) {
    max-width: 437px;
    width: 100%;
    height: 655px;
  }
`;

export const MovieDetailsWrapper = styled.div`
  margin-top: 20px;

  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 32px;
    font-size: 14px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: calc(23 / 20);
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 30px;
    line-height: calc(35 / 30);
  }
`;

export const UserScore = styled.p`
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const OverviewWrapper = styled.div`
  margin-bottom: 20px;
  & > p:first-child {
    margin-bottom: 8px;
    text-transform: uppercase;
  }
`;

export const GenresWrapper = styled.div`
  & > p:first-child {
    margin-bottom: 8px;
    text-transform: uppercase;
  }
`;

export const AddInfoWrapper = styled.div`
  & > h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: calc(23 / 20);
    text-transform: uppercase;

    @media (min-width: 1280px) {
      font-size: 26px;
    }
  }

  & a {
    display: inline-block;
    padding: 8px 0px;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(16 / 12);
    text-transform: uppercase;
    text-decoration: underline;
    color: rgb(33, 33, 33, 0.6);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media (min-width: 768px) {
      font-size: 14px;
    }

    @media (min-width: 1280px) {
      font-size: 18px;
    }

    :hover {
      color: #e90418;
    }
  }
`;
