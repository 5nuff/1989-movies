import React, { useState, useEffect } from 'react'
import MovieItem from './MovieItem'

const App = () => {
  const [movies, setMovies] = useState([])
  const getDataFromApi = async () => {
    const resp = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=0e8aba4bfd1f0badefbdd05a4949c889'
    )
    const data = await resp.json()
    console.log(data)
    setMovies(data.results)
  }
  useEffect(() => {
    console.log('using the effect')
    getDataFromApi()
  }, [])

  return (
    <>
      <header>Best Movies of 1989</header>
      <ul>
        {movies.map(movie => {
          return (
            <MovieItem
              key={movie.id}
              title={movie.title}
              vote_average={movie.vote_average}
              overview={movie.overview}
              poster_path={
                'https://image.tmdb.org/t/p/w185_and_h278_bestv2' +
                movie.poster_path
              }
            />
          )
        })}
      </ul>
    </>
  )
}

export default App
