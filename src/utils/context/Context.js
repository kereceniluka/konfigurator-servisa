import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    
    const [state, setState] = useState({
        openModal: false,
        openSuccessDialog: false,
        currStep: 1,
        manufacturer: '',
        services: [],
        coupon: {
            isOpen: false,
            isValid: false,
            validCoupons: [
                { id: 1, value: 'Tokić123', discount: 30 },
            ],
        },
        personalInfo: {
            name: '',
            email: '',
            telNumber: '',
            remark: '',
        },
        totalServicePrice: 0,
        discountPrice: 0,
        totalPrice: 0,
    });
    
    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    );
}