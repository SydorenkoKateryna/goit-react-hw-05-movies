import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink';
import MovieInformation from 'components/MovieInformation';
import Error from 'components/Error';
import { getMovieDetails } from 'api/getMovies';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getMovieDetails(id);
        const { data } = response;

        setMovieDetails(data);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, [id]);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <main>
      <BackLink to={backLinkHref.current}>Go back</BackLink>

      {error && <Error message={error.message} />}

      {movieDetails && <MovieInformation movieDetails={movieDetails} />}
    </main>
  );
};

export default MovieDetails;
