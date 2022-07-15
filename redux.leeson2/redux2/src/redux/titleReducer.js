import{ types } from "../types";

const initialState ={
    title: " " 
}


export const titleReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SAY_HELLO:
            return{...state, title:action.payload}
        case types.CLEAR_TEXT:
            return{...state, title :""}
                
        default:
            return state;

        }
    // if(action.type === "SAY_HELLO")
    // return {
    //     ...state, title: "hello word"
    // }
    // return state 
}