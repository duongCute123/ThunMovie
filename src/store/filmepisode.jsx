import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import connect from "../@connect/connect"
import { showMessage } from "./message"
import getErrorMessage from "../widgets/GetErrorMessage"

const AppName = "ThunMov"
const moduleName = "tapphim"
export const episode = {
    episodemovie: createAsyncThunk(`${AppName}/${moduleName}/tap`, async (params, thunkAPI) => {
        try {
            const response = await connect.filmepisode.episode(params)
            return response.data
        } catch (error) {
            thunkAPI.dispatch(showMessage({variant: error,message: getErrorMessage(error)}))
            return thunkAPI.fulfillWithValue(error)
        }
    })
}
const EpisodeSlice = createSlice({
    name: `${AppName}/${moduleName}`,
    initialState: {
        loading: false,
        movie: [],
        error: null
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(episode.episodemovie.pending, (state) => {
                state.error = null
                state.loading = true
                state.movie = {
                    data: []
                }
            })
            .addCase(episode.episodemovie.fulfilled, (state, { payload }) => {
                state.error = null
                state.loading = false
                state.movie = payload
            })
            .addCase(episode.episodemovie.rejected, (state, { error }) => {
                state.loading = false
                state.error = error
                state.movie = null
            })
    }
})
export default EpisodeSlice.reducer