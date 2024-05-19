import { useState, useEffect } from "react";
import mockSucces from "../mocks/mocks.json"; // Suponiendo que lo usarás en algún lugar
import strings from "../strings";
const { URL_API, API_KEY } = strings;

export function useMovies({ query }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        const response = await fetch(`${URL_API}?apikey=${API_KEY}&s=${query}`);
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          setError(data.Error);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, [query]);

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    name: movie.Title,
    category: movie.Type,
    image: movie.Poster,
  }));

  return { movies: mappedMovies, error };
}
