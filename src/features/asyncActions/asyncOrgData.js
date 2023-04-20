import {
    getOrgReq,
    getOrgList,
    getOrgListFail,
} from '../reducers/OrgDataSlice';

import * as api from '../../api/publicDataFetch';

export const fetchOrgList=()=>async(dispatch)=>{
    try{
        dispatch(getOrgReq())
        let orgList=await api.OrgList();
        dispatch(getOrgList(orgList.data.orgList))

    }catch(err){
        getOrgListFail(err.response.data.message || err.message)
    }
}
