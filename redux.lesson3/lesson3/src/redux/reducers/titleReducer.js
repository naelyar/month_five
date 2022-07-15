import { types } from "../../types"

const initialState = {
    title:"hello world"
}



export const titleReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.CHANGE_TITLE:
            return {...state , title:"new title"}
        

            default:
                return state
   }
}