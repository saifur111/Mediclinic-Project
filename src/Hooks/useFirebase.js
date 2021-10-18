import { getAuth,updateProfile, signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebaseAuth from "../components/Firebase/firebase.init";


initFirebaseAuth();

const useFirebase =()=>{
    const [user,setUser]=useState({});
    const [error , setError]=useState('');
    const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

    const auth = getAuth();
     //SignIn With Google
    const signInWithGoogle =()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                // console.log(result.user); 
            });
        

    }
     // SignIn With Password & Email
    // const signInWithPasswordEmail =()=>{
    //     const googleProvider = new GoogleAuthProvider();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((result) => {
    //             setUser(result.user);
    //             const user = userCredential.user;
    //             // console.log(result.user); 
    //         });

    // }
    // create user With Password & Email
    const createInWithPasswordEmail =(e)=>{
        e.preventDefault();
        if(password.length<6){
            setError('Password Length Must Be At Least 6 Characters Long');
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user); 
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
        logOut,
        error,
        createInWithPasswordEmail,
        setUsername,
        setEmail,
        setPassword
    }
}
export default useFirebase;