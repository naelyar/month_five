import {combineReducers} from "redux";
import {createNumberReducer} from "./createNumberReduser"
 export const rootReducer = combineReducers({
    numbers:createNumberReducer,

}) 