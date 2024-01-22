import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{

      const observerRequest =  onAuthStateChanged(auth, (newUser)=>{
        setUser(newUser)
        setLoading(false)
      })
      return ()=> observerRequest()
    },[])

    // Create User
    const createUser = (email, password) =>{
      setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);

    }
    // Login
    const login = ( email, password)=>{
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Logout
    const logout =() =>{
      setLoading(true)
        return signOut(auth)
    }
    // Update a user's profile

    const updateUser =(user, name, url)=>{
       return updateProfile(user, {
        displayName: name,
        photoURL: url,
       })
    }
    // Google sign in 

    const googleSingIn = ()=>{
      
        const googleProvider = new GoogleAuthProvider();
return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
createUser,
login,
user,
logout,
updateUser,
googleSingIn,
loading,
setLoading
    }

    return (
      <AuthContext.Provider value={authInfo}>
{children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;