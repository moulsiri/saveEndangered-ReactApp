import {createSlice} from '@reduxjs/toolkit';

const initialState={
    loading:false,
    error:null,
    success:false,
    articleList:[],
}


export const articleSlice=createSlice({
    name:"article-data",
    initialState,
    reducers:{
        CreateRequest:(state,action)=>{
            state.loading=true    
        },
        CreateFail:(state,action)=>{
            state.error=action.payload
        },
        CreateSuccess:(state,action)=>{

            state.success=true;
        },
        getArticles:(state,action)=>{
            state.articleList=action.payload
        },
        clearError:(state,action)=>{
            state.loading=false;
            state.error=null;
        }
    }
})

export const {
    CreateRequest,
    CreateFail,
    CreateSuccess,
    getArticles,
    clearError

}=articleSlice.actions;

export default articleSlice.reducer;