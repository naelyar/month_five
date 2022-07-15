import {combineReducers} from "redux";
import {numberReducer} from "./numberReducer";
import {titleReducer} from "./titleReducer";


export const rootReducer = combineReducers({
    number: numberReducer,
    title: titleReducer,

})