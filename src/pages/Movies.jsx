import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import MovieList from 'components/MovieList';
import Searchbar from 'components/Searchbar';
import Error from 'components/Error';
import { getSearchMovies } from 'api/getMovies';
import ReactPaginate from 'react-paginate';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const movieName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);
  const itemsPerPage = 20;

  const pageCount = Math.ceil(totalResults ? totalResults / itemsPerPage : 0);

  const handlePageClick = event => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    const getData = async () => {
      try {
        const response = await getSearchMovies(movieName, page);
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
  }, [movieName, page]);

  return (
    <main style={{ paddingBottom: '60px' }}>
      <Searchbar onSubmit={updateQueryString} />

      {error && <Error message={error.message} />}

      {searchMovies && (
        <>
          <MovieList movies={searchMovies} />

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

export default Movies;
