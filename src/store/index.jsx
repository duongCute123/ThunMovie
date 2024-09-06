import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./movieupdate"
import AnimeSlice from "./anime"
import BoSlice from "./moviebo"
import LeSlice from "./moviele"
export const store = configureStore({
    reducer: {
        film: MovieSlice,
        categorymovie: AnimeSlice,
        bo: BoSlice,
        le: LeSlice
    }
})
