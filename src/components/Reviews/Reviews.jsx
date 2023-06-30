import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/getMovies';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { Info, List, Item, Author, Review } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieReviews, setMovieReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      try {
        const response = await getMovieReviews(id);
        const {
          data: { results },
        } = response;
        setMovieReviews(results);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    getData();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}

      {error && <Error message={error.message} />}

      {(!movieReviews || !movieReviews.length) && !isLoading && (
        <Info>Unfortunately, we don't have any reviews for this movie.</Info>
      )}

      {movieReviews && !isLoading && (
        <List>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <Item key={id}>
                <Author>Author: {author}</Author>
                <Review>{content}</Review>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Reviews;
