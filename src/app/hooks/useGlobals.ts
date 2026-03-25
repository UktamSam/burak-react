import { createContext, useContext } from "react";
import { Member } from "../../lib/types/member";
import { GlobalContext } from "../context/ContextProvider";

// hook
export const useGlobals = () => {
    //useContext  - GlobalContext'dan qiymatni o'qiydi
    const context = useContext(GlobalContext);
    if(context === undefined ) throw new Error("useGlobals within Provider!");
    return context;
    // { authMember, setAuthMember } -> component'ga tayyor holda qaytadi
}