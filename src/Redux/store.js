import { configureStore } from "@reduxjs/toolkit"
import { tmdbApi } from "../Redux/services/TMDB"

export default configureStore({
    reducer : {
        [tmdbApi.reducerPath] : tmdbApi.reducer
    }
})