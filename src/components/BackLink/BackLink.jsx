import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0 0;
  color: ${({ theme }) => theme.colors.colorBackLink};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-size: 18px;
  font-weight: 400;
  line-height: 13px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding: 16px 0 0px;
  }

  :hover {
    transform: scale(1.1);
    color: #e90418;
  }
`;

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
