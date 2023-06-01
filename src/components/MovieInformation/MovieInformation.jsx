import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieInformation = ({ movieDetails }) => {
  const { genres, poster_path, title, release_date, vote_average, overview } =
    movieDetails;

  const movieGenres = () => {
    const normalizedGenres = [];
    genres.map(genre => normalizedGenres.push(genre.name));
    return normalizedGenres.join(', ');
  };

  return (
    <section>
      <div style={{ display: 'flex', gap: '40px' }}>
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
        <div style={{ maxWidth: '400px' }}>
          {/* <h2>{movieDetails.title} ({movieDetails.release_date.slice(0, 4)})</h2> */}
          <h1>
            {title} ({new Date(release_date).getFullYear()})
          </h1>
          <p>User Score: {(vote_average * 10).toFixed(0)}%</p>

          <div>
            <p>Overview</p>
            <p>{overview}</p>
          </div>

          <div>
            <p>Genres</p>
            <p>{movieGenres()}</p>
          </div>
        </div>
      </div>

      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

MovieInformation.propTypes = {
  movieDetails: PropTypes.shape({
    genres: PropTypes.array.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieInformation;
