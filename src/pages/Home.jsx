import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/getMovies';
import ReactPaginate from 'react-paginate';
import MovieList from 'components/MovieList';
import Error from 'components/Error';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const [totalResults, setTotalResults] = useState(null);
  const itemsPerPage = 20;
  const pageCount = Math.ceil(totalResults ? totalResults / itemsPerPage : 0);

  const handlePageClick = event => {
    setSearchParams({ page: event.selected + 1 });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getTrendingMovies(page);

        const {
          data: { results, total_results },
        } = response;

        setTrendingMovies(results);

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });

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
              nextLabel={<AiOutlineArrowRight size={15} />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              pageCount={pageCount}
              forcePage={page - 1}
              previousLabel={<AiOutlineArrowLeft size={15} />}
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
