import { createSlice } from "@reduxjs/toolkit";
import { IConfigs } from "../../interface/IConfigs";

const initialState: IConfigs = {
    open: false,
    isLogin: false
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setOpen(state, action) {
            state.open = action.payload
        },
        checkLogin(state){
            if(window.localStorage.token){
                state.isLogin = true
            }else{
                state.isLogin = false
            }
        }
    }
})

export const { setOpen,checkLogin } = configSlice.actions
export default configSlice.reducer