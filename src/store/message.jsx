import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    message: null
}
const messageSlice = createSlice({
    name: "Message",
    initialState,
    reducers: {
        showMessage: (state, action) => {
            state.message = action.payload
        },
        // hideMessage: (state, action) => {
        //     s
        // }
    }
})
export const { showMessage, hideMessage } = messageSlice.reducer
export default messageSlice.reducer