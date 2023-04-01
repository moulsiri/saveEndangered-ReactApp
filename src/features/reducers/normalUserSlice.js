import {createSlice} from '@reduxjs/toolkit';

const initialState={
    loading:false,
    user:{},
    isAuthenticated:false,
    error:null,
}

export const normalUserSlice=createSlice({
    name:'normal-user',
    initialState,
    reducers:{
        //actions to register normal user
        loginNormalUserRequest:(state,action)=>{
            state.loading=true;
        },
        loginNormalUserSuccess:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=true;
            state.user=action.payload;
            state.error=null;
        },
        loginNormalUserFail:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false;
            state.user={};
            state.error=action.payload;
        },

        loadNormalUserRequest:(state,action)=>{
            state.user=action.payload;
            state.isAuthenticated=true;

        },
        needToSignIn:(state,action)=>{
            state.user={};
            state.isAuthenticated=false;

        },
        logOutNormalUser:(state,action)=>{
            state.user={};
            state.isAuthenticated=false;

        },
        clearError:(state,action)=>{
            state.loading=false;
            state.error=null;
        }

    }
})

export const {
    loginNormalUserRequest,
    loginNormalUserSuccess,
    loginNormalUserFail,

    loadNormalUserRequest,
    needToSignIn,

    logOutNormalUser,
    clearError


}=normalUserSlice.actions;

export default normalUserSlice.reducer;