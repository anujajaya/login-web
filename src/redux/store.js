import {configureStore}from "@reduxjs/toolkit"
import initialState from "./initialstate"
let store=configureStore({
    reducer:initialState
})
export default store