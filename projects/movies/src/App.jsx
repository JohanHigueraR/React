import "./App.css";
import mockFailed from "./mocks/mockFailed.json";
import Movies from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const {movies, error} = useMovies({query})
  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = new window.FormData(e.target)
    const query = data.get('query')
    setQuery(query)
    
  }
  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input name="query" type="text" placeholder="escribe una pelicula" />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies}></Movies>
      </main>
    </div>
  );
}

export default App;
