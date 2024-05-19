import { useState, useEffect } from 'react'
import { getMovies } from '../services/getMovies'

export function useMovies ({ query }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query) return
    async function fetchData () {
      try {
        setLoading(true)
        const response = await getMovies({ query })
        if (response.error) {
          setError(response.error)
          setMovies([])
        } else {
          setMovies(response)
          setError('')
        }
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [query])

  return { movies, error, loading }
}
