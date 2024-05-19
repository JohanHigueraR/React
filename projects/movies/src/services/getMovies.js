const { VITE_URL_API, VITE_API_KEY } = import.meta.env

export async function getMovies ({ query }) {
  try {
    const response = await fetch(`${VITE_URL_API}?apikey=${VITE_API_KEY}&s=${query}`)
    const data = await response.json()
    if (data.Response === 'True') {
      const mappedMovies = data.Search?.map((movie) => ({
        id: movie.imdbID,
        name: movie.Title,
        category: movie.Type,
        image: movie.Poster
      }))
      return mappedMovies
    }
    return { error: 'sin resultados para esta busqueda' }
  } catch (error) {
    throw new Error('error al consular las peliculas')
  }
}
