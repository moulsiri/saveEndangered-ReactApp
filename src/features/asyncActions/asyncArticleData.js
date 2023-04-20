import {
    getArticlesReq,
    getArticleListFail,
    getArticleList,
    clearError,
} from '../reducers/articleData';
import * as api from '../../api/publicDataFetch';

export const fetchArticleList=()=>async(dispatch)=>{
    try{
        dispatch(getArticlesReq());
        let articleList=await api.articleList();
        dispatch(getArticleList(articleList.data.articleList));

    }catch(err){
        getArticleListFail(err.response.data.message || err.message)
    }
}