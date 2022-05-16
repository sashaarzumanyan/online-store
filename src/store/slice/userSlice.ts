import { createSlice } from "@reduxjs/toolkit";
import { IConfigs } from "../../interface/IConfigs";

interface IUser {
    name: string,
    surname: string,
    balance: number
}

const initialState: IUser = {
    name: "Sasha",
    surname: "Arzumanyan",
    balance: 250
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    }
})

export const { } = userSlice.actions
export default userSlice.reducer