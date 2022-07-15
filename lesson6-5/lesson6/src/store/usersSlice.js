import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "usersSlice",
    initialState:{
        users:[]
    },
    reducers:{
        addUser(state , action) {
            state.users =[...state.users , action.payload]
        }
    }
})



export default 