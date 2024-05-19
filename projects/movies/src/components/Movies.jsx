import React from "react";

function ListMovies({ movies }) {
  return (
    <ul className="listContainer">
      {movies.map((movie) => (
        <li className="listItem" key={movie.id}>
          <h3>{movie.name}</h3>
          <p>{movie.category}</p>
          <img src={movie.image} alt={movie.name} />
        </li>
      ))}
    </ul>
  );
}

function MoviesError() {
  return <p>Sin películas para esta busqueda</p>;
}

function Movies({ movies }) {
  const haveMovies = movies?.length > 0;
  return haveMovies ? (
    <ListMovies movies={movies}></ListMovies>
  ) : (
    <MoviesError />
  );
}

export default Movies;
