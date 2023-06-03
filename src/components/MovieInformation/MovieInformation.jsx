import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import {
  Section,
  MovieWrapper,
  Image,
  MovieDetailsWrapper,
  Title,
  UserScore,
  OverviewWrapper,
  GenresWrapper,
  AddInfoWrapper,
} from './MovieInformation.styled';

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
    <Section>
      <MovieWrapper>
        <Image
          src={
            poster_path
              ? `${IMG_URL}${poster_path}`
              : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
          }
          alt={title}
        />
        <MovieDetailsWrapper>
          <Title>
            {title} ({new Date(release_date).getFullYear()})
          </Title>
          <UserScore>User Score: {(vote_average * 10).toFixed(0)}%</UserScore>

          <OverviewWrapper>
            <p>Overview</p>
            <p>{overview}</p>
          </OverviewWrapper>

          <GenresWrapper>
            <p>Genres</p>
            <p>{movieGenres()}</p>
          </GenresWrapper>
        </MovieDetailsWrapper>
      </MovieWrapper>

      <AddInfoWrapper>
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
      </AddInfoWrapper>
    </Section>
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
