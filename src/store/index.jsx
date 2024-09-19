import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./movieupdate"
import AnimeSlice from "./anime"
import BoSlice from "./moviebo"
import LeSlice from "./moviele"
import SearchSlice from "./searchmovie"
import EpisodeSlice from "./filmepisode"
import MessageSlice from "./message"
import GenreSlice from "./genremovies"
import CountriesSlice from "./countries"
export const store = configureStore({
    reducer: {
        film:           MovieSlice,
        categorymovie:  AnimeSlice,
        bo:             BoSlice,
        le:             LeSlice,
        search:         SearchSlice,
        taps:           EpisodeSlice,
        message:        MessageSlice,
        genres :        GenreSlice,
        quocgia:    CountriesSlice
    }
})
