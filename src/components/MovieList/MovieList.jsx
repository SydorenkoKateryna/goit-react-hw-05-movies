import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Section,
  List,
  Item,
  Image,
  Title,
  InfoWrapper,
  SecondTitle,
} from './MovieList.styled';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieList = ({ movies, title }) => {
  const location = useLocation();

  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {movies.map(({ id, poster_path, title }) => {
          return (
            <Item key={id}>
              <Link
                to={location.pathname === '/' ? `movies/${id}` : `${id}`}
                state={{ from: location }}
              >
                <Image
                  src={
                    poster_path
                      ? `${IMG_URL}${poster_path}`
                      : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                  }
                  alt={title}
                />
                <InfoWrapper>
                  <SecondTitle>
                    {title.length <= 30 ? title : `${title.slice(0, 30)} ...`}
                  </SecondTitle>
                </InfoWrapper>
              </Link>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
