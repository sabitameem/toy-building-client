import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password,name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
        
    }
    const updateUser =userInfo=>{return updateProfile(auth.currentUser,userInfo)}

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            // .then((result) => {
            //     const user = result.user;
                 // Set the photoURL property for the user
            //     if (user) {
            //         user.updateProfile({
            //             photoURL: photoURL || null, // Use the provided photoURL or set it to null if not provided
            //         });
            //     }
            //     return result;
            // })
            // .catch((error) => console.log(error));
    }
    

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    
  const authInfo = {
    loading,
    createUser,
    signIn,
    logOut, 
    user,
    updateUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
