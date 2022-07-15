import { types } from "../../types";

export const addInputAction =(data) => {
    return {
        type:types.ADD_NUMBER ,
        payload:data
    }
}

export const addNumAction =(number) => {
    return {
        type: types.PLUS_TITLE ,
        payload: number
    }
}