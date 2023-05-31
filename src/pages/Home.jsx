import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/getMovies';
import MovieList from 'components/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    if (trendingMovies) {
      return;
    }

    const getData = async () => {
      const {
        data: { results },
      } = await getTrendingMovies();
      setTrendingMovies(results);
    };

    getData();
  }, [trendingMovies]);

  return (
    <main>
      <h1>Trending today</h1>
      {trendingMovies && <MovieList movies={trendingMovies} />}
    </main>
  );
};

export default Home;
