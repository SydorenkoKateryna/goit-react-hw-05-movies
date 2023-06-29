import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 320px;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;

    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Nav = styled.nav`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 2px;
  font-size: 18px;
  font-weight: 400;
  line-height: 13px;
  text-transform: uppercase;
  color: inherit;

  &.active {
    color: #e90418;
  }
`;
