import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList';
import Searchbar from 'components/Searchbar';
import { getSearchMovies } from 'api/getMovies';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
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
      const {
        data: { results },
      } = await getSearchMovies(movieName);
      setSearchMovies(results);
    };

    getData();
  }, [movieName]);

  return (
    <main>
      <Searchbar onSubmit={updateQueryString} />
      {searchMovies && <MovieList movies={searchMovies} />}
    </main>
  );
};

export default Movies;
