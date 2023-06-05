import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/getMovies';
import MovieList from 'components/MovieList';
import Error from 'components/Error';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (trendingMovies) {
      return;
    }

    const getData = async () => {
      try {
        const response = await getTrendingMovies();
        const {
          data: { results },
        } = response;

        setTrendingMovies(results);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, [trendingMovies]);

  return (
    <main>
      {error && <Error message={error.message}/>}

      {trendingMovies && (
        <MovieList movies={trendingMovies} title="Trending today" />
      )}
    </main>
  );
};

export default Home;
