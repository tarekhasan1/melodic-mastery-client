import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
  } from "firebase/auth";
  import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const github = new GithubAuthProvider();
const facebook = new FacebookAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
          setUser(loggedUser);
          console.log("logged user:", loggedUser);
          setLoading(false);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);


    const createUser = async (email, password, displayName, photoURL) => {
        await createUserWithEmailAndPassword(auth, email, password);
    
        await updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        });
    
        const updatedUser = auth.currentUser;
        setUser({
          ...updatedUser,
        });
        // console.log(updatedUser);
      };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
      };

      const signInWithGithub = () =>{
        return signInWithPopup(auth, github);
      }

      const signInWithFacebook = () =>{
        return signInWithPopup(auth, facebook);
      }

      const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };


      const logOut = () => {
        return signOut(auth);
      };


      const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        logOut
      };


    return (
        <AuthContext.Provider value={authInfo}>
        {!loading && children}
    </AuthContext.Provider>
    );
};

export default AuthProviders;