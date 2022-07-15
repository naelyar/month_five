import { createSlice } from "@reduxjs/toolkit";
import { increment } from "./countSlice";


const usersSlice = createSlice({
    name:"usersSlice", 
    initialState:{
        age:26,
        name:"Dastan"
    } ,
    extraReducers:{
        [increment]:(state) => {
            state.age +=1
        }
    }
})


export default usersSlice.reducer