import { createSlice } from "@reduxjs/toolkit";
const Favourite = createSlice({
    name: "favourite",
    initialState: {
        status: null,
        movie: []
    },
    extraReducers: (builder) => {

    },
    reducers: {
        addFavourite: (state, action) => {
            if (state.movie.find(movie => movie._id === action.payload._id)) {
                alert("Phim đã được thêm rồi")
            } else {
                state.movie.push(action.payload)
                localStorage.setItem("yeuthich", JSON.stringify(state.movie))
                state.status = "add"
            }

        },

    }

})
export const { addFavourite } = Favourite.actions
export default Favourite.reducer