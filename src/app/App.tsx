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
import "../css/app.css";
import "../css/navbar.css"
import "../css/footer.css"
import Test from "./screens/Test";
import { CartItem } from "../lib/types/search";
import useBasket from "./hooks/useBasket";



function App() {
  const location = useLocation();   //useText - hooklar

  const {cartItems, onAdd,  onRemove, onDelete, onDeleteAll} = useBasket();
  
  return (
     <>
        {location.pathname === "/" 
        ? <HomeNavbar 
            cartItems = {cartItems} 
            onRemove = {onRemove} 
            onDelete={onDelete} 
            onDeleteAll={onDeleteAll}
            onAdd={onAdd}
          /> 
        : <OtherNavbar 
            cartItems = {cartItems} 
            onRemove = {onRemove} 
            onDelete={onDelete} 
            onDeleteAll={onDeleteAll}
            onAdd={onAdd}
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
      </>
  )
}

export default App;





