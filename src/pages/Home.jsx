import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/getMovies';
import ReactPaginate from 'react-paginate';
import MovieList from 'components/MovieList';
import Error from 'components/Error';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);
  const itemsPerPage = 20;

  const pageCount = Math.ceil(totalResults ? totalResults / itemsPerPage : 0);

  const handlePageClick = event => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    // if (trendingMovies) {
    //   return;
    // }

    const getData = async () => {
      try {
        const response = await getTrendingMovies(page);

        const {
          data: { results, total_results },
        } = response;

        setTrendingMovies(results);

        if (total_results > 10000) {
          setTotalResults(10000);
        } else {
          setTotalResults(total_results);
        }
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, [page]);

  return (
    <main style={{ paddingBottom: '60px' }}>
      {error && <Error message={error.message} />}

      {trendingMovies && (
        <>
          <MovieList movies={trendingMovies} title="Trending today" />
          {pageCount > 1 && (
            <ReactPaginate
              breakLabel="..."
              nextLabel="🡲"
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              pageCount={pageCount}
              previousLabel="🡰"
              renderOnZeroPageCount={null}
              containerClassName="containerStyled"
              disabledClassName="disabledButtonStyled"
              activeClassName="activePageStyled"
            />
          )}
        </>
      )}
    </main>
  );
};

export default Home;
