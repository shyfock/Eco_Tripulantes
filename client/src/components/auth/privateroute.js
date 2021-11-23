import React, { useState, useRef, useLayoutEffect } from 'react';
import { Navigate, Outlet } from 'react-router';
import { getSession } from '../helper';

const checkAuth = () => {
    return !getSession() ? false : true;
}

export default function PrivateRoute () {
    const [auth, setAuth] = useState(checkAuth() ? true : false)
    const previousAuth = useRef(false)
    useLayoutEffect(()=>(
        () => {
            previousAuth.current = checkAuth() && !auth;
            setAuth(previousAuth.current);
        }
    ),[auth])
    
    console.log({
        auth: auth,
        previousAuth: previousAuth.current,
        checkAuth: checkAuth()
    })
    return auth ? <Outlet/> : <Navigate to="/login"/>
}