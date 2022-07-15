import {combineReducers} from "redux";
import { inputReducer } from "./inputReduser";
import {titleReducer} from "./titleReducer";
import {usersReducer} from "./usersReducer"


export const rootReducer = combineReducers({
        title: titleReducer,
        input:inputReducer,
        users:usersReducer

})