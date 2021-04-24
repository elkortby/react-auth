import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../../firebase'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscibe = auth.onAuthStateChange(user => {
            auth.setCurrentUser()
        })

        return unsubscibe
    }, [])
    
    const value = {
        currentUser,
        signUp
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
