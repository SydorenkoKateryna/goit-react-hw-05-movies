import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/getMovies';
import Error from 'components/Error';
import { List, Item, Image, Name, Character } from './Cast.styled';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getMovieCast(id);
        const {
          data: { cast },
        } = response;
        setMovieCast(cast);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, [id]);

  return (
    <>
      {error && <Error message={error.message} />}

      {movieCast && (
        <List>
          {movieCast.map(({ id, profile_path, original_name, character }) => {
            return (
              <Item key={id}>
                <Image
                  src={
                    profile_path
                      ? `${IMG_URL}${profile_path}`
                      : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                  }
                  alt={original_name}
                />
                <Name>{original_name}</Name>
                <Character>Character: {character}</Character>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Cast;
