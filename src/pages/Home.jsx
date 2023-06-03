import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/getMovies';
import MovieList from 'components/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (trendingMovies) {
      return;
    }

    const getData = async () => {
      try {
        const {
          data: { results },
        } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, [trendingMovies]);

  return (
    <main>
      {error && <h1>{error.message}</h1>}

      {trendingMovies && (
        <MovieList movies={trendingMovies} title="Trending today" />
      )}
    </main>
  );
};

export default Home;
