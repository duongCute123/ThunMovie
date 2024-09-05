import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./movieupdate"

export const store=configureStore({
    reducer:{
        film: MovieSlice
    }
})
