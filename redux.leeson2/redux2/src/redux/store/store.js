import {combineReducers} from "redux";
import { titleReducer } from "../titleReducer";
import{createUserReducer} from "../../redux/createUserReducer"
import { createNumbereducer } from "../createNumberReducer";
 export const rootReducer = combineReducers({
    titleReducer: titleReducer,
    users:createUserReducer,
    number: createNumbereducer
}) 