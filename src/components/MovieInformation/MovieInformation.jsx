const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieInformation = ({ movieDetails }) => {
  const movieGenres = () => {
    const genres = [];

    movieDetails.genres.map(genre => genres.push(genre.name));

    return genres.join(' ');
  };

  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div>
        <img
          src={`${IMG_URL}${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
      </div>
      <div style={{ maxWidth: '400px' }}>
        <h2>{movieDetails.title} ({movieDetails.release_date.slice(0, 4)})</h2>
        <p>User Score: {(movieDetails.vote_average * 10).toFixed(0)}%</p>

        <div>
          <b>Overview</b>
          <p>{movieDetails.overview}</p>
        </div>

        <div>
          <b>Genres</b>
          <p>{movieGenres()}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInformation;
