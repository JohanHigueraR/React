import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useState } from 'react'
import Loading from './components/Loading'
import { useDebounce } from './hooks/useDebounce'

function App () {
  const [query, setQuery] = useState('')
  const queryDebounce = useDebounce(query, 500)
  const { movies, error, loading } = useMovies({ query: queryDebounce.query })
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new window.FormData(e.target)
    const query = data.get('query')
    setQuery(query)
  }
  const handleChange = (e) => {
    const query = e.target.value

    setQuery({ query })
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name='query'
            type='text'
            placeholder='escribe una pelicula'
          />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {loading
          ? (
            <Loading />
            )
          : (
            <Movies movies={movies} error={error} />
            )}
      </main>
    </div>
  )
}

export default App
