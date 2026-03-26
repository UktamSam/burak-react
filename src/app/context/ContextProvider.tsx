import React, { ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { Member } from "../../lib/types/member";
import { GlobalContext } from "../hooks/useGlobals";
import useBasket from "../hooks/useBasket";

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cookies = new Cookies();
  if (!cookies.get("accessToken")) localStorage.removeItem("memberData"); // Cookiening vaqti tugan o'chib ketgandan keyin localStoragedagi member datani ham o'chirib tashlash uchun
  // aks holda localStorage doim saqlanadi

  const [authUser, setAuthMember] = useState<Member | null>(
    localStorage.getItem("memberData")
      ? JSON.parse(localStorage.getItem("memberData") as string)
      : null,
  );

  const [orderBuilder, setOrderBuilder] = useState<Date>(new Date());
  console.log("====Verify====");

  return (
    <GlobalContext.Provider
      value={{ authUser, setAuthMember, orderBuilder, setOrderBuilder, basket: useBasket() }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

// context ham qaysidir manoda redux vazifasiga o'xshash ishni qildi . Lekin uningchalik Mukammal bolmaganligi uchun ishlatilmaydi .
