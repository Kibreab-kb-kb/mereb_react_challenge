import React, { createContext, useState } from "react";

export const ModalContext = createContext(false);

const ModalContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ open, setOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;
