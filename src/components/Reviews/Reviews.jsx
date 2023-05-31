import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/getMovies';

const Reviews = () => {
  const { id } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { results },
      } = await getMovieReviews(id);
      setMovieReviews(results);
    };

    getData();
  }, [id]);

  return (
    <>
      {/* {movieReviews && (
        <ul>
          {movieReviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )} */}

      {movieReviews.length ? (
        <ul>
          {movieReviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
