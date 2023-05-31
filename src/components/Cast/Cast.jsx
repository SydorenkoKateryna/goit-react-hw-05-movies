import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/getMovies';

const IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { cast },
      } = await getMovieCast(id);
      setMovieCast(cast);
    };

    getData();
  }, [id]);

  return (
    <>
      {movieCast && (
        <ul>
          {movieCast.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  src={`${IMG_URL}${cast.profile_path}`}
                  alt={cast.original_name}
                />
                <h3>{cast.original_name}</h3>
                <p>Character: {cast.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
