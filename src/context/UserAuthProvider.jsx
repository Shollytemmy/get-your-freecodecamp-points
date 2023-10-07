
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { auth } from "../firebase";


const userAuthContext = createContext()




export const useUserAuth = () => {
    return useContext(userAuthContext)
}

export const UserAuthProvider = ({children}) => {
    const [user, setUser] = useState({})

   

    const logIn = (email, password) => {
        
        console.log(email, password)

        return signInWithEmailAndPassword(auth, email, password)

    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()

        return signInWithPopup(auth, googleProvider)
         

    }

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()


        }

    }, [])

    return <userAuthContext.Provider value={{user, logIn, signUp, logOut, signInWithGoogle }}>
        {children}
    </userAuthContext.Provider>
}