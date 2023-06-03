import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink';
import { getMovieDetails } from 'api/getMovies';
import MovieInformation from 'components/MovieInformation';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getMovieDetails(id);
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

      {error && <h1>{error.message}</h1>}

      {movieDetails && <MovieInformation movieDetails={movieDetails} />}
    </main>
  );
};

export default MovieDetails;