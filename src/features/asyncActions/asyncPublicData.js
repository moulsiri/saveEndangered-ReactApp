import {
    getArticles,
    getOrgList
} from '../reducers/publicDataSlice';

import * as api from '../../api/publicDataFetch';

export const fetchOrdList=()=>async(dispatch)=>{
    try{
        let orgList=await api.OrgList();
        dispatch(getOrgList(orgList.data.orgList))

    }catch(err){
        console.log(err);

    }
}

export const fetchArticleList=()=>async(dispatch)=>{
    try{
        let articleList=await api.articleList();
        dispatch(getArticles(articleList.data.articleList))

    }catch(err){
       console.log(err)
    }
}