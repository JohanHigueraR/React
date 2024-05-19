function ListMovies ({ movies }) {
  return (
    <ul className='listContainer'>
      {movies?.map((movie) => (
        <li className='listItem' key={movie.id}>
          <h3>{movie.name}</h3>
          <p>{movie.category}</p>
          <img src={movie.image} alt={movie.name} />
        </li>
      ))}
    </ul>
  )
}

function MoviesError ({ error }) {
  return <p>{error}</p>
}

function Movies ({ movies, error }) {
  const haveMovies = movies?.length > 0
  return haveMovies
    ? (
      <ListMovies movies={movies} />
      )
    : (
      <MoviesError error={error} />
      )
}

export default Movies
