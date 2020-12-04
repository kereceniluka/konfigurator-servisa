import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    
    const [state, setState] = useState({
        openModal: false,
        currStep: 3,
        manufacturer: '',
    });
    
    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    );
}