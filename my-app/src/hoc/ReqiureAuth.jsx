import React from 'react'
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const ReqiureAuth = ({ children }) => {
   const location = useLocation();
   const { persone } = useAuth();

   if (persone === '') {
      return <Navigate to='/login' state={{ from: location }} />
   } else {
      return children
   }
}

export default ReqiureAuth;