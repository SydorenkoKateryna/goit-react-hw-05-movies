import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/getMovies';
import Loader from 'components/Loader';

const Reviews = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      const {
        data: { results },
      } = await getMovieReviews(id);
      setMovieReviews(results);
      setIsLoading(false);
    };

    getData();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}

      {(!movieReviews || !movieReviews.length) && !isLoading && (
        <p>We don't have any reviews for this movie.</p>
      )}

      {movieReviews && !isLoading && (
        <ul>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
