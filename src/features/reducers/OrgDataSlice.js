import {createSlice} from '@reduxjs/toolkit';

const initialState={
    loading:false,
    orgList:[],
    error:null,
    success:false,
}

export const  orgDataSlice=createSlice({
    name:"public-data",
    initialState,
    reducers:{
        getOrgReq:(state,action)=>{
            state.loading=true;
        },
        getOrgList:(state,action)=>{
            state.orgList=action.payload;
            state.loading=false;
            state.success=true;
        },
        getOrgListFail:(state,action)=>{
            state.error=action.payload;
        },
        clearError:(state,action)=>{
            state.loading=false;
            state.success=false;
            state.orgList=[];
            state.error=null
        }
    }
})

export const {
    getOrgReq,
    getOrgList,
    getOrgListFail,

}=orgDataSlice.actions;
export default orgDataSlice.reducer;