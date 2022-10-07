import React from 'react'

function MovieCard( {movie} ) {
  return (
    <div>
        <h1> {movie.title} </h1>
        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}  alt="" />
    </div>
  )
}

export default MovieCard