import React from 'react'

const MovieItem = movie => {
  return (
    <section className="all">
      <h1>{movie.title}</h1>
      <img src={movie.poster_path}></img>
      <h2>{movie.vote_average}</h2>
      <p>{movie.overview}</p>
    </section>
  )
}

export default MovieItem
