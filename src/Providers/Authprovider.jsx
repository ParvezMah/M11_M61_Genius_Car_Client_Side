import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn 
    const signIn = (email, password)=> {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // SignOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    // user signed in or not
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser);
            console.log('Current User in : ', currentUser);
            setLoading(false);
            // if user exists then issue a token
            if(currentUser){
                axios.post('/https://module-58-genius-car-server-side.vercel.app/jwt', loggedUser,{
                    withCredentials:true
                })
                .then(res => {
                    console.log('token response : ', res.data);
                });
            }
            else{
                axios.post('/https://module-58-genius-car-server-side.vercel.app/logout', loggedUser, {
                    withCredentials:true
                })
                .then(res => {
                    console.log('LogOut : ', res.data);
                })
            }
        })
        return ()=>{
            return unSubscribe();
        }
    },[user])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;