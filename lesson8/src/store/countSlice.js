import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:"countSlice" ,
    initialState:0,
    reducer:{
        increment: state => state +1
    }
})

export const {increment} = countSlice.actions;
export default countSlice.reducer