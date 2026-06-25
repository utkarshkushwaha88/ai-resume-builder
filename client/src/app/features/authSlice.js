import { createSlice } from "@reduxjs/toolkit";


// createSlice() is a function from Redux Toolkit that automatically creates:

// State
// Reducers
// Action creators

const authSlice = createSlice({
    name:'auth',
    initialState:{
        token:null,
        user:null,
        loading:true,
    },
    // Reducers modify the state.
    reducers:{
        login:(state,action)=>{
            state.token=action.payload.token
            state.user=action.payload.user
        },
        logout:(state)=>{
            state.token='',
            state.user=null,
            localStorage.removeItem('token')
        },
        setLoading:(state,action)=>{
            state.loading=action.payload
        }
    }
})


export const {login,logout,setLoading}=authSlice.actions

export default authSlice.reducer