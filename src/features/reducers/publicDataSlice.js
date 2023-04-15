import {createSlice} from '@reduxjs/toolkit';

const initialState={
    orgList:[],
    articleList:[],
}

export const  publicDataSlice=createSlice({
    name:"public-data",
    initialState,
    reducers:{
        getOrgList:(state,action)=>{
            state.orgList=action.payload
        },
        getArticles:(state,action)=>{
            state.articleList=action.payload
        }
    }
})

export const {
    getOrgList,
    getArticles
}=publicDataSlice.actions;
export default publicDataSlice.reducer;