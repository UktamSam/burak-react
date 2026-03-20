import React, { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import ProductsPage from "./screens/productsPage";
import OrdersPage from "./screens/ordersPage";
import UserPage from "./screens/usersPage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import Test from "./screens/Test";
import { CartItem } from "../lib/types/search";
import useBasket from "./hooks/useBasket";
import AuthenticationModal from "./components/auth";
import "../css/app.css";
import "../css/navbar.css"
import "../css/footer.css"
import { sweetErrorHandling, sweetTopSuccessAlert } from "../lib/sweetAlert";
import { Messages } from "../lib/config";
import MemberService from "./services/MemberService";
import { useGlobals } from "./hooks/useGlobals";




function App() {
  const location = useLocation();   //useText - hooklar
  const { setAuthMember } = useGlobals();
  const {cartItems, onAdd,  onRemove, onDelete, onDeleteAll} = useBasket();
  const [signupOpen, setSignupOpen] = useState<boolean>(false)
  const [loginOpen, setLoginOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null >(null)


  /*Handlers*/

const handleSignupClose = () => setSignupOpen(false);
const handleLoginClose = () => setLoginOpen(false);

const handleLogoutClick = (e: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(e.currentTarget);
}

const handleCloseLogout = () => setAnchorEl(null);
const handleLogoutRequest = async () => {
  try {
    const member = new MemberService();
    await member.logout();

    await sweetTopSuccessAlert("Success", 700)
    setAuthMember(null);
  } catch (err) {
    console.log(err);
    sweetErrorHandling(Messages.error1)
  }
}

  return (
     <>
        {location.pathname === "/" 
        ? <HomeNavbar 
            cartItems = {cartItems} 
            onRemove = {onRemove} 
            onDelete={onDelete} 
            onDeleteAll={onDeleteAll}
            onAdd={onAdd}
            setSignupOpen={setSignupOpen}
            setLoginOpen={setLoginOpen}
            anchorEl={anchorEl}
            handleLogoutClick={handleLogoutClick}
            handleCloseLogout={handleCloseLogout}
            handleLogoutRequest={handleLogoutRequest}
          /> 
        : <OtherNavbar 
            cartItems = {cartItems} 
            onRemove = {onRemove} 
            onDelete={onDelete} 
            onDeleteAll={onDeleteAll}
            onAdd={onAdd}
            setSignupOpen={setSignupOpen}
            setLoginOpen={setLoginOpen}
            anchorEl={anchorEl}
            handleLogoutClick={handleLogoutClick}
            handleCloseLogout={handleCloseLogout}
            handleLogoutRequest={handleLogoutRequest}
          />}
        <Switch>
          <Route path="/products">
            <ProductsPage onAdd = {onAdd}/>
          </Route>
          <Route exact path="/orders">
            <OrdersPage />
          </Route>
          <Route exact path="/member-page">          
          <UserPage />
          </Route>
          <Route exact path="/help">          
            <HelpPage />
          </Route>
          <Route exact path="/">
            {/* <Test /> */}
            <HomePage />
          </Route>
        </Switch>
        <Footer />

        < AuthenticationModal 
        signupOpen={signupOpen} 
        loginOpen={loginOpen} 
        handleSignupClose={handleSignupClose}
        handleLoginClose={handleLoginClose}
        /> 
      </>
  )
}

export default App;





