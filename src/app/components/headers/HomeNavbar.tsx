import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
    cartItems: CartItem[];
    onAdd: (item: CartItem) => void;
    onRemove: (item: CartItem) => void;
    onDelete: (item: CartItem) => void;
    onDeleteAll: () => void;
    setSignupOpen: (isOpen: boolean) => void;
    setLoginOpen: (isOpen: boolean) => void;
}


export default function HomeNavbar(props: HomeNavbarProps) {
    const {
        cartItems, 
        onAdd,  
        onRemove, 
        onDelete, 
        onDeleteAll,
        setSignupOpen,
        setLoginOpen,
    }  = props;
    const authMember = null;
    
    /* HANDLER */

return  <div className="home-navbar">
                <Container className="navbar-container">
                    <Stack className="menu">
                        <Box>
                            <NavLink to="/">
                                <img className="brand-logo" src="/icons/burak.svg" alt="logo"/>
                            </NavLink>
                        </Box>    
                        <Stack className="links">
                            <Box className={"hover-line"}>
                                <NavLink to="/" activeClassName={"underline"}>Home</NavLink>
                            </Box>
                            <Box className={"hover-line"}>
                                <NavLink to="/products" activeClassName={"underline"}>Products</NavLink>
                            </Box>
                            {authMember ? (
                            <Box className={"hover-line"}>
                                <NavLink to="/orders" activeClassName={"underline"}>Orders</NavLink>
                            </Box>
                            ) : null} 
                            {authMember ? (
                            <Box className={"hover-line"}>
                                <NavLink to="/member-page" activeClassName={"underline"}>My page</NavLink>
                            </Box>      
                            ) : null}        
                            <Box className={"hover-line"}>
                                <NavLink to="/help" activeClassName={"underline"}>Help</NavLink>
                            </Box>
                            <Basket 
                                cartItems={cartItems} 
                                onRemove = {onRemove} 
                                onDelete={onDelete} 
                                onDeleteAll={onDeleteAll}
                                onAdd={onAdd}
                            />  
                            {!authMember ? (
                                <Box>
                                    <Button 
                                        variant="contained" 
                                        className="login-button"
                                        onClick={() => setLoginOpen(true)}
                                    >
                                        Login
                                    </Button> 
                                </Box>
                            ) : (
                                <img    src="/icons/default-user.svg" 
                                        aria-haspopup={"true"} 
                                        className="user-avatar"/>)}
                        </Stack>
                    </Stack>

                    <Stack className="header-frame">
                        <Stack className="detail"> 
                            <Box className="head-main-txt">World's Most Delicious Cousine</Box>
                            <Box className="welcome-txt">The Choice, not just a choice</Box>
                            <Box className="service-txt">24 hours service</Box>
                            <Box className="signup">
                                {!authMember ?  
                                    <Button 
                                        variant="contained" 
                                        className="signup-btn"
                                        onClick={() => setSignupOpen(true)}
                                    >
                                        SIGN UP
                                    </Button>
                                : null}
                            </Box>
                        </Stack>
                        <Stack className="logo-frame">
                            <div className="logo-img">

                            </div>
                        </Stack>
                    </Stack>
                </Container>
            </div>;
}