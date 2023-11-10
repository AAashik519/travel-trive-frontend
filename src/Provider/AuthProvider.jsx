import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { auth } from './../config/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [user , setUser]= useState(null)
    const [isLoading , setIsLoading]= useState(true)




    const createUser= (email, password)=>{
        setIsLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser =(email ,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const userSignOut =()=>{
        // setIsLoading(true)
        return signOut(auth)
    }



    const googleLogin = ()=>{
        setIsLoading(true)
        return  signInWithPopup(auth,googleProvider)
    }



    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth ,(currentUser)=>{
            setUser(currentUser)
            setIsLoading(false)
        })
        return ()=>{
            return subscribe()
        }
    },[])


    const values = {
        isLoading,
        user,
        createUser,
        userSignOut,
        loginUser,
        googleLogin
    }

  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider