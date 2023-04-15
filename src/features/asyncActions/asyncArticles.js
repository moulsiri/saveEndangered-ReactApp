import {
    fetchArticleList
} from '../asyncActions/asyncPublicData';

import {
    CreateRequest,
    CreateFail,
    CreateSuccess,
    clearError

} from '../reducers/articleSlice';

import * as api from '../../api/articles';

export const createArticleAsync=(body)=>async(dispatch)=>{
    try{
        dispatch(CreateRequest());
        let data=await api.createArticle(body);
        console.log(data);
        dispatch(CreateSuccess());
        dispatch(fetchArticleList()); 

    }catch(err){
        dispatch(CreateFail(err.response.data.message || err.message))
        // console.log(err)

    }
}

export const clearArticleError=()=>(dispatch)=>{
    setTimeout((e)=>{
        dispatch(clearError());
    },2000);
}