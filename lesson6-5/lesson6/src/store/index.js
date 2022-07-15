import { configureStore } from "@reduxjs/toolkit";

import titleReducer from  "./titleSlice";

export default configureStore({
    reducer:{
        titleReducer: titleReducer

    }
})