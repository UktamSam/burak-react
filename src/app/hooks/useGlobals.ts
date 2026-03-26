import { createContext, useContext } from "react";
import { Member } from "../../lib/types/member";

interface globalInterface {
  authUser: Member | null;
  setAuthMember: (member: Member | null) => void;
  orderBuilder: Date,
  setOrderBuilder: (input: Date)=>void
  basket: any;
}

export const GlobalContext = createContext<globalInterface | undefined>(
  undefined,
);

export const useGlobals = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) { throw new Error("useGlobals withit Provider") }
    return context;
}
