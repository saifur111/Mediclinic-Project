import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebaseAuth from "../components/Firebase/firebase.init";

initFirebaseAuth();

const useFirebase =()=>{
    const [user,setUser]=useState({});

    const auth = getAuth();

    const signInWithGoogle =()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                // console.log(result.user); 
            });

    }
    // user state change
    useEffect(()=>{
      const unsub =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
               setUser({});
            }
          });
          return ()=> unsub;
    },[auth])
    const logOut =()=>{
        signOut(auth).then(() => {
            
          });
    }
    return {
        user,
        signInWithGoogle,
        logOut
    }
}
export default useFirebase;