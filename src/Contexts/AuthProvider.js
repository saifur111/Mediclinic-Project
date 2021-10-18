import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children , ...rest}) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {
                children
                // console.log(children)
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;