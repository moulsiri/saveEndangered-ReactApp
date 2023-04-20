import {createSlice} from '@reduxjs/toolkit';

const initialState={
    loading:false,
    articleList:[],
    success:false,
    error:null,
}

export const articleSlice=createSlice({
    name:'articles-data',
    initialState,
    reducers:{
        getArticlesReq:(state,action)=>{
            state.loading=true;
        },
        getArticleList:(state,action)=>{
            state.articleList=action.payload;
            state.loading=false;
            state.success=true;
        },
        getArticleListFail:(state,action)=>{
            state.error=action.payload;
        },
        clearError:(state,action)=>{
            state.loading=false;
            state.success=false;
            state.articleList=[];
            state.error=null
        }
    }
})


export const {
    getArticlesReq,
    getArticleListFail,
    getArticleList,
    clearError
}=articleSlice.actions;
export default articleSlice.reducer;