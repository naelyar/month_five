import { types } from "../../types";

const initialState ={
    data: {}
}

export const numberReducer = (state = initialState , action) =>{
    switch (action.type) {
        case types.ADD_NUMBER:
            return{
                ...state , data:{
                    [ action.payload.name  ]: + action.payload.value +10
                }
            }

            default:
                return state
    }
}