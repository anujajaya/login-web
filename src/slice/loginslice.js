import{ createSlice } from '@reduxjs/toolkit'
export const loginSlice =createSlice({
    name:"login",
    initialState:{
        count:0,
        loginArray:[]
    },
    reducers:{
        loginadd:(state,action)=>{
            console.log("dd",action.payload)
            state.loginArray=action.payload
        }
    }
})
export const {loginadd} =loginSlice.actions
export default loginSlice.reducer