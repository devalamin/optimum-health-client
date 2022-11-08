import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    };
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const userLogOut = () => {
        return signOut(auth);

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

        })
        return () => {
            unsubscribe();
        }
    }, [])



    const AuthInfo = {
        createNewUser,
        user,
        userLogin,
        userLogOut

    }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;