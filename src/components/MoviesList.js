import React from 'react'
import { useGetMoviesQuery } from "../Redux/services/TMDB"
import MovieCard from './MovieCard'

function MoviesList() {
    const {data , error , isFetching} = useGetMoviesQuery()
  return (
    <div className='flex flex-row flex-wrap'>
        {data && data.results.map((movie , i) => {
            return <MovieCard key={i} movie={movie}  />
        })}
        
        <button onClick={() => console.log(data) } >log</button>
    </div>
  )
}

export default MoviesList