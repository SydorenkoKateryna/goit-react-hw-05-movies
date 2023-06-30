import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/getMovies';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { Info, List, Item, Image, Name, Character } from './Cast.styled';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMAGE =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';

const Cast = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      try {
        const response = await getMovieCast(id);
        const {
          data: { cast },
        } = response;
        setMovieCast(cast);
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

      {(!movieCast || !movieCast.length) && !isLoading && !error && (
        <Info>
          Unfortunately, we don't have any cast information for this movie.
        </Info>
      )}

      {movieCast && !isLoading && !error && (
        <List>
          {movieCast.map(({ id, profile_path, original_name, character }) => {
            return (
              <Item key={id}>
                <Image
                  alt={original_name}
                  src={
                    profile_path ? `${IMG_URL}${profile_path}` : DEFAULT_IMAGE
                  }
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = DEFAULT_IMAGE;
                  }}
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
