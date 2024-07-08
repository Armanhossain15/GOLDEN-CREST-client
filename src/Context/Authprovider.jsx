import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";


export const authContext = createContext()   //context creat
const Authprovider = ({children}) => {
    const auth = getAuth(app)


    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const googleProvider =  new GoogleAuthProvider()

    const createUser = (email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const SignInUser = (email, password)=>{
      return  signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const signOutUser =()=>{
       return signOut(auth)
      
    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            console.log('current User is', currentUser);
        })
        return ()=>{
            unSubscribe()
        }
        
    },[auth])


    const authInfo = {
        createUser,
        SignInUser,
        updateUserInfo,
        user,
        signOutUser,
        googleSignIn,
        loading
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider >
    );
};
Authprovider.propTypes = {
    children: PropTypes.node
}
export default Authprovider;