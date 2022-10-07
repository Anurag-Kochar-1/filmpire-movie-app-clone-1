import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY

// /movie/popular?api_key=<<api_key>>&language=en-US&page=1
const page = 1


export const tmdbApi = createApi({
    reducerPath : "tmdbApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
    endpoints : (builder) => ({
        getMovies: builder.query({
            query: () => {
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`
            }
        })
    })
})

export const { useGetMoviesQuery } = tmdbApi