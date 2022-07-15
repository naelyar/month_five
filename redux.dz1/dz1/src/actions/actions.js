import { useStore } from "react-redux";
import{ types } from "../types";


// export const sayHelloAction = (text) => {
//     return {
//         type: types.SAY_HELLO,
//         payload:text

//     }

// }
// export const clearHelloAction = (user) => {
//     return {
//         type: types.CLEAR_TEXT,
//         payload: user

//     }

// }
export const createNumberAction = (user) => {
    return {
        type: types.CREATE_NUMBER,
        payload: user

    }

}
export const addNumAction = (num) => {
    return {
        type: types.ADD_NUM,
        payload: num
    }
}

// export const  clearInputAction= (name) => {
//     return {
//         type: types.CLEAR_NAME,
//         payload: name



//     }

// }

// export const createNumberAction = (number) => {
//     return {
//         type: types.CREATE_NUMBER,
//         payload: number

//     }

// }
// export const addNumberAction = (number) => {
//     return {
//         type: types.ADD_NUMBER,
//         payload: number

//     }

// }


