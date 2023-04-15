import {
    loginRequest,
    loginSuccess,
    loginFail,
    
    loadUserRequest,
    loadUser,
    needToSignIn,

    logOut,
    clearError
} from '../reducers/normalUserSlice';

import * as api from '../../api/authentication';

import * as fire from '../../firebase/userAuth';

import { getAuth,onAuthStateChanged ,signOut} from 'firebase/auth';


export const asyncRegisterUser=(data,flag)=>async (dispatch,getState)=>{
    dispatch(loginRequest())
    try{
        switch(flag){
            case 'org':{
                let orgdata=await api.registerOrg(data);
                dispatch(loginSuccess(
                    {
                        data:orgdata.data.data,
                        flag
                    }
                ))

            }
            break;
            case 'user':{
               let userData=await api.registerUser(data);
               dispatch(loginSuccess(
                {
                    data:userData.data.data,
                    flag
                }
            ))
            }
            break;
            default: dispatch(loginFail("Please provide valid candidate details"))
        }
       

    }catch(err){
        dispatch(loginFail(err.response.data.message || err.message))
        
    }
}

export const asyncLogin=(data,flag)=>async (dispatch,getState)=>{
    try{
        dispatch(loginRequest())
        switch(flag){
            case 'org':{
                let orgdata=await api.loginOrg(data);
                dispatch(loginSuccess(
                    {
                        data:orgdata.data.data,
                        flag
                    }
                ))

            }
            break;
            case 'user':{
                let userData=await api.loginUser(data);
                dispatch(loginSuccess(
                    {
                        data:userData.data.data,
                        flag
                    }
                ))
            }
            break;
            default: dispatch(loginFail("Please provide valid candidate details"))
        }


    }catch(err){
        // dispatch(loginNormalUserFail(err.message.slice(10)))
        dispatch(loginFail(err.response.data.message || err.message))

    }
}

export const asyncLoadUser=()=>async (dispatch,getState)=>{
    try{
        dispatch(loadUserRequest())
        let orgdata=await api.loadOrg();

        dispatch(loadUser(
            {
                data:orgdata.data.data,
                flag:'org'
            }
        ))
        

    }catch(err){
        try{
            let userData=await api.loadUser();
            dispatch(loadUser(
                {
                    data:userData.data.data,
                    flag:'user'
                }
            ))

        }catch(err){
            dispatch(needToSignIn(err.response.data.message))
            console.clear();
        }

       
    }
}

export const logOutAsync=(flag)=>async (dispatch)=>{
    try{
        // switch(flag){
        //     case 'org':{
        //         let orgdata=await api.logoutOrg();
        //         dispatch(logOut())

        //     }
        //     break;
        //     case 'user':{
        //        let userData=await api.logoutUser();
        //        dispatch(logOut())

        //     }
        //     break;
        //     default: dispatch(loginFail("Please provide valid candidate details"))
        // }
        let userData=await api.logoutUser();
               dispatch(logOut())

    }catch(err){

    }
}

export const clearErrorAsync=()=>(dispatch)=>{
    setTimeout((e)=>{
        dispatch(clearError());
    },2000)
}