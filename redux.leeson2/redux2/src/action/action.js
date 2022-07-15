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
export const createUserAction = (user) => {
    return {
        type: types.CREATE_USER,
        payload: user

    }

}
export const addNameAction = (name) => {
    return {
        type: types.ADD_NAME,
        payload: name
    }
}

export const  clearInputAction= (name) => {
    return {
        type: types.CLEAR_NAME,
        payload: name



    }

}
export const addNumberAction = (num) => {
    return {
        type: types.ADD_NUMBER,
        payload: num
    }
}



