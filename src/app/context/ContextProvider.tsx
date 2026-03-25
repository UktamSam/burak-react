import React, { createContext, ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { Member } from "../../lib/types/member";
import useBasket from "../hooks/useBasket";

// GlobalContext -- Define

interface GlobalInterface {
    authMember: Member | null; 
    setAuthMember: (member: Member | null) => void;
    basket: any;
}

// createContext - context yaratadi (global store)
export const GlobalContext = createContext<GlobalInterface | undefined>(
    undefined
);

const ContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
    // remove memberData
    const cookies = new Cookies();
    if(!cookies.get("accessToken")) localStorage.removeItem("memberData");

    // state
    const [authMember, setAuthMember] = useState< Member | null >(
        localStorage.getItem("memberData") 
        ? JSON.parse(localStorage.getItem("memberData") as string) 
        : null
    );
    console.log("=== Verify ===");

    // context'ga malumot jo'natish
    return (<GlobalContext.Provider value={{authMember, setAuthMember, basket: useBasket() }}>
        {children}
        {/* value={...} bu quti'ning ichiga solingan narsa */}
        {/* children - Provider ichidagi BARCHA componentlar shu qiymatni o'qiy oladi*/}
    </GlobalContext.Provider>);
};

export default ContextProvider;