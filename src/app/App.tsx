import React, { useState } from "react";
import "../css/app.css";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import MemberPage from "./screens/usersPage";
import OrdersPage from "./screens/ordersPage";
import ProductsPage from "./screens/productsPage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import useBasket from "./hooks/useBasket";
import AuthenticationModal from "./components/auth";
import { sweetErrorHandling, sweetTopSuccessAlert } from "../lib/sweetAlert";
import { Messages } from "../lib/config";
import MemberService from "./services/MemberService";
import { useGlobals } from "./hooks/useGlobals";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/app.css";

export default function App() {
  const location = useLocation();
  const { setAuthMember } = useGlobals();

  const [singupOpen, setSingUpOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  /** Handlers */

  const handleSignupClose = () => {
    setSingUpOpen(false);
  };
  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleLogoutClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(e.currentTarget);
  };

  const handleCloseLogout = () => {
    setAnchorElement(null);
  };
  const handleLogoutRequest = async () => {
    try {
      const member = new MemberService();
      await member.logout();
      setAuthMember(null);

      await sweetTopSuccessAlert("Success", 700);
    } catch (error) {
      console.log("handleLogoutRequest", error);
      sweetErrorHandling(Messages.error1);
    }
  };
  return (
    <>
      {location.pathname === "/" ? (
        <HomeNavbar
          setSignupOpen={setSingUpOpen}
          setLoginOpen={setLoginOpen}
          anchorEl={anchorElement}
          handleLogoutClick={handleLogoutClick}
          handleCloseLogout={handleCloseLogout}
          handleLogoutRequest={handleLogoutRequest}
        />
      ) : (
        <OtherNavbar
          anchorEl={anchorElement}
          handleLogoutClick={handleLogoutClick}
          handleCloseLogout={handleCloseLogout}
          handleLogoutRequest={handleLogoutRequest}
          setSignupOpen={setSingUpOpen}
          setLoginOpen={setLoginOpen}
        />
      )}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <MemberPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          {/* <Test /> */}
          <HomePage />
        </Route>
      </Switch>
      <Footer />

      <AuthenticationModal
        signupOpen={singupOpen}
        loginOpen={loginOpen}
        handleSignupClose={handleSignupClose}
        handleLoginClose={handleLoginClose}
      />
    </>
  );
}
