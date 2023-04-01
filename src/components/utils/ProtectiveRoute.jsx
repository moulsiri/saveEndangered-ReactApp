import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate,useLocation } from 'react-router-dom';

const ProtectiveRoute = ({children}) => {
    const {isAuthenticated}=useSelector((state)=>state.normalUser)
    if(isAuthenticated){
        return <Navigate to="/"  replace/>
    }
  return children
}

export default ProtectiveRoute