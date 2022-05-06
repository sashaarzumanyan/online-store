import { createSlice } from "@reduxjs/toolkit";
import { IConfigs } from "../../interface/IConfigs";

const initialState: IConfigs = {
    open: false
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setOpen(state, action) {
            state.open = action.payload
        }
    }
})

export const { setOpen } = configSlice.actions
export default configSlice.reducer