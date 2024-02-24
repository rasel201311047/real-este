import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
const auth = getAuth(app);
//contex create
export const AuthContex=createContext(null);
const AuthProviders = ({children}) => {
    const[user,setUser]=useState(null);
   

    //registation
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //singIn
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);

    }

    //ssign out
    const logOut=()=>{
        return signOut(auth);
    }
    // cbserve auth state change 
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('auth state change',currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    //make a object
    const authInfo={
        user,
        createUser,
        signInUser,
        logOut

    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;