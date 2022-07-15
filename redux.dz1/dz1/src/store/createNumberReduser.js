import{ types } from "../types";
  

const initialState = {
    users:[],
    name:""
    
}

export const createNumberReducer=(state =initialState,action) =>{
    switch (action.type){
        case types.CREATE_NUMBER:
            return{...state, users:[...state.users, + action.payload +10 ]}
            case types.ADD_NUM:
                return{
                    ...state, name:action.payload 
                }
                // case types.CLEAR_NAME:
                // return{
                //     ...state,  name: " "
                    
                // }
            
             default:
                return state

    }
}