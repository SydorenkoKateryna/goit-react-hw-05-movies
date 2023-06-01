import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/getMovies';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

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
          {movieCast.map(({ id, profile_path, original_name, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `${IMG_URL}${profile_path}`
                      : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                  }
                  alt={original_name}
                  width="200"
                />
                <h3>{original_name}</h3>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
