import {configureStore}  from "@reduxjs/toolkit";
import dataReducer from "./dataSlice"
import fetchReducer from "./fetchSlice"

export default configureStore ({
    reducer:{
        dataReducer:dataReducer,
        fetchReducer: fetchReducer

    }
})
