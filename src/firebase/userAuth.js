import {auth,app,database} from '../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { collection,doc,setDoc,getDoc} from 'firebase/firestore';



export const firebaseRegisterNormalUser=async (data)=>{

    try{
        const {name,email,password}=data;
        const {user} =await createUserWithEmailAndPassword(auth,email,password);
        console.log(user)
        const nUsers=doc(database,'normal-users',user.uid);
        let uData={
            name,email,
            articles:[],
            emailVerified:user.emailVerified,
            photoURL:user.photoURL,
            createdAt:user.metadata.createdAt
        }
        await setDoc(nUsers,uData)
        return uData;
    }catch(err){
        return err;
    }
}

export const getUserData=async (uid)=>{
    try{
        let docRef=doc(database,'normal-users',uid);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            // console.log(docSnap.data());
            return docSnap.data();
        }


    }catch(err){
        return err

    }

}

export const firebaseSignIn=async (data)=>{
    try{
        const {email,password}=data;
        const {user}=await signInWithEmailAndPassword(auth,email,password);
        let d=await getUserData(user.uid);
        return d;    

    }catch(err){
       console.log(err)
    }
}