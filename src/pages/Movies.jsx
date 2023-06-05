import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import MovieList from 'components/MovieList';
import Searchbar from 'components/Searchbar';
import Error from 'components/Error';
import { getSearchMovies } from 'api/getMovies';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const movieName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    const getData = async () => {
      try {
        const response = await getSearchMovies(movieName);
        const {
          data: { results, total_results },
        } = response;

        if (total_results === 0) {
          setSearchMovies(null);
          toast.error(
            'Sorry, there are no movies matching your search query. Please, try again.'
          );
          return;
        }

        setSearchMovies(results);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, [movieName]);

  return (
    <main>
      <Searchbar onSubmit={updateQueryString} />

      {error && <Error message={error.message} />}

      {searchMovies && <MovieList movies={searchMovies} />}
    </main>
  );
};

export default Movies;
