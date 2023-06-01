import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, poster_path, title }) => {
        return (
          <li key={id}>
            <Link
              to={location.pathname === '/' ? `movies/${id}` : `${id}`}
              state={{ from: location }}
            >
              <div>
                <img
                  src={
                    poster_path
                      ? `${IMG_URL}${poster_path}`
                      : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                  }
                  alt={title}
                  width="500"
                />
              </div>
              <h2>{title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
