import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const StyledLoader = styled.div`
  width: 80px;
  margin: 0 auto;
  margin-top: 20px;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <RotatingLines
        strokeColor="#625e5d"
        strokeWidth="4"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    </StyledLoader>
  );
};

export default Loader;
