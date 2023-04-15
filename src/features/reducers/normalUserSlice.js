import {createSlice} from '@reduxjs/toolkit';

const initialState={
    loading:false,
    user:{},
    isAuthenticated:false,
    error:null,
    flag:"",
}

export const normalUserSlice=createSlice({
    name:'normal-user',
    initialState,
    reducers:{
        //actions to register normal user
        loginRequest:(state,action)=>{
            state.loading=true;
        },
        loginSuccess:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=true;
            state.user=action.payload.data;
            state.error=null;
            state.flag=action.payload.flag;
        },
        loginFail:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false;
            state.user={};
            state.error=action.payload;
        },
        loadUserRequest:(state,action)=>{
            state.loading=true;
        },
        loadUser:(state,action)=>{
            state.loading=false;
            state.user=action.payload.data;
            state.isAuthenticated=true;
            state.flag=action.payload.flag

        },
        needToSignIn:(state,action)=>{
            state.loading=false;
            state.user={};
            state.isAuthenticated=false;

        },
        logOut:(state,action)=>{
            state.user={};
            state.isAuthenticated=false;
            state.flag="";
            console.log(action.payload)

        },
        clearError:(state,action)=>{
            state.loading=false;
            state.error=null;
        }

    }
})

export const {
    loginRequest,
    loginSuccess,
    loginFail,
    
    loadUserRequest,
    loadUser,
    needToSignIn,

    logOut,
    clearError


}=normalUserSlice.actions;

export default normalUserSlice.reducer;