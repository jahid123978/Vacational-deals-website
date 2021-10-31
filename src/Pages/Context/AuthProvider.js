import React from 'react';
import { createContext } from 'react';
import useFirebase from '../useFirebase/useFirebase';


export const authProvider = createContext();
const AuthProvider = ({children}) => {
    const allAuth = useFirebase();
    return (
        <authProvider.Provider value={allAuth}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthProvider;