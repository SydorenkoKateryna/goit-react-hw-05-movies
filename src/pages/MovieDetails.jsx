import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import BackLink from 'components/BackLink';
import { getMovieDetails } from 'api/getMovies';
import MovieInformation from 'components/MovieInformation';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getMovieDetails(id);
      setMovieDetails(data);
    };

    getData();
  }, [id]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>

      {movieDetails && (
        <>
          <MovieInformation movieDetails={movieDetails} />
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
