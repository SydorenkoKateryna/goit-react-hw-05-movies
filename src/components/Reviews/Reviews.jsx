import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/getMovies';
import Loader from 'components/Loader';
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
        const {
          data: { results },
        } = await getMovieReviews(id);
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

      {error && <h2>{error.message}</h2>}

      {(!movieReviews || !movieReviews.length) && !isLoading && (
        <Info>We don't have any reviews for this movie.</Info>
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
