import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { movie } from "./movieupdate";

const Favourite = createSlice({
    name: "favourite",
    initialState: {
        status: null,
        movie: []
    },
    extraReducers: {

    },
    reducers: {
        addFavourite(state, action) {
            state.movie.push(action.payload)
            localStorage.setItem("yeuthich", JSON.stringify(state.movie))
        }
    }

})
export const { addFavourite } = Favourite.actions
export default Favourite