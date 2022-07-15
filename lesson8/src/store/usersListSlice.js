import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(
    'getUsers',
    async function (data, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if(response.status === 200) {
                const data = await response.json();
                return data
            }else if (response.status === 404) {
                throw Error('не правильный адрес')
            }

        }catch (e) {
            return rejectWithValue(e.message)
        }

    }
)
 export const getOneUser = createAsyncThunk(
    'getOneUser',
    async function (id, {rejectWithValue}) {
        try{
         const response = await   fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
         if(response.status === 200) {
            const data = await response.json();
            // console.log(data)
            return data
        }
        else {
            throw Error ("error")
        }

        }
        catch (err ) {
            return rejectWithValue(err.message)
        }
    }



)

const usersListSlice = createSlice({
    name: "usersListSlice",
    initialState: {
        users: [],
        error: null,
        user:{}
    },
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state,action) => {
            state.users = action.payload
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.error = action.payload
        })

        
                builder.addCase(getOneUser.fulfilled, (state , action)=>{
                    state.user = action.payload
                })
}})

export default usersListSlice.reducer;