import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Wrapper, Input, Form, Button } from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedValue = value.trim();

    if (normalizedValue === '') {
      toast.info('Please, enter keywords to find a movie.');
      return;
    }

    onSubmit(normalizedValue);

    setValue('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Find a movie to watch..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button type="submit">
          <FiSearch size={24} />
        </Button>
      </Form>
    </Wrapper>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
