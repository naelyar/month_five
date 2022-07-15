import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
    "createUser",
    async function(form) {
       const options ={
        method:"POST" ,
        header:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(form)

        }

        const response =await fetch('https://jsonplaceholder.typicode.com/users',options)
        if(response.status === 201) {
            alert("success")
        }else if(response.status === 404) {
            alert ("error")
        }
        // const data = await response.json()
        // console.log(data);


    }
    )

    export const getPosts = createAsyncThunk(
        "getPosts",
        async function(data,{ dispatch}) {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json()
            dispatch(getPostsAction(posts))


        }
    )

    const fetchSlice = createSlice({
        name:"fetchSlice", initialState:{
            posts:[],
            post:{
                title:"",
                body:""
            }
        },
        reducers:{
            getPostsAction(state , action) {
                state.posts = action.payload
            }
        }
    })

    export const {getPostsAction} = fetchSlice.actions;

    export default fetchSlice.reducer;