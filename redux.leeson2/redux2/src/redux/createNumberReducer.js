import{ types } from "../types";
  

const initialState = {
   number: [],
    num:"",
    
}

export const createNumbereducer=(state =initialState,action) =>{
    switch (action.type){
        case types.CREATE_NUMBER:
            return{...state, number:[...state.users,  +action.payload + 10 ]}
            case types.ADD_NUM:
                return{
                    ...state, num: action.payload 
                }
                
            
             default:
                return state

    }
}