import {
    loginNormalUserRequest,
    loginNormalUserSuccess,
    loginNormalUserFail,

    loadNormalUserRequest,
    needToSignIn,
    logOutNormalUser,
    clearError
} from '../reducers/normalUserSlice';

import * as api from '../../api/authentication';

import * as fire from '../../firebase/userAuth';

import { getAuth,onAuthStateChanged ,signOut} from 'firebase/auth';


export const registerNormalUser=(data,setOpenAlert)=>async (dispatch,getState)=>{
    dispatch(loginNormalUserRequest())
    try{
        let user=await fire.firebaseRegisterNormalUser(data);
        console.log(user)
        dispatch(loginNormalUserSuccess(user))

    }catch(err){
        dispatch(loginNormalUserFail(err.message.slice(10)))
        
    }
}

export const loginNormalUser=(data)=>async (dispatch,getState)=>{
    try{
    dispatch(loginNormalUserRequest())

    let user=await fire.firebaseSignIn(data);
    dispatch(loginNormalUserSuccess(user));

    }catch(err){
        dispatch(loginNormalUserFail(err.message.slice(10)))
    }
}

export const loadNormalUser=()=>async (dispatch,getState)=>{
    try{
        const auth=getAuth();
        onAuthStateChanged(auth,async (user)=>{
            if(user){
                let data=await fire.getUserData(user.uid)
                dispatch(loadNormalUserRequest(data))


            }else{
                dispatch(needToSignIn())
            }
        })

    }catch(err){

    }
}

export const logOutNormalUserAsync=()=>async (dispatch)=>{
    try{
        const auth = getAuth();
         const status=await signOut(auth)
         dispatch(logOutNormalUser())


    }catch(err){

    }
}

export const clearErrorAsync=()=>(dispatch)=>{
    setTimeout((e)=>{
        dispatch(clearError());
    },3000)
}