import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children }) => {
    const location = useLocation()
    const {user ,isLoading} = useAuth()
    if(isLoading){
       return <progress className="progress w-56"></progress>
    }
    if(!isLoading && !user?.email){
        return <Navigate  to='/login' state={location.pathname}/>
    }

    return children
}

export default PrivateRoute