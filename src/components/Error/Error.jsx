import PropTypes from 'prop-types';
import { Message } from './Error.styled';

const Error = ({ message }) => {
  return <Message>Sorry, there was an error. {message}.</Message>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
