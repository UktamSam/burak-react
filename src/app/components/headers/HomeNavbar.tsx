import { Box, Button, Container, ListItemIcon, Menu, MenuItem, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { Logout } from "@mui/icons-material";
import useBasket from "../../hooks/useBasket";

interface HomeNavbarProps {
    setSignupOpen: (isOpen: boolean) => void;
    setLoginOpen: (isOpen: boolean) => void;
    handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
    anchorEl: HTMLElement | null;
    handleCloseLogout: () => void;
    handleLogoutRequest: () => void;
}


export default function HomeNavbar(props: HomeNavbarProps) {
    const { basket } = useGlobals();
    const {
        setSignupOpen,
        setLoginOpen,
        handleLogoutClick,
        anchorEl,
        handleCloseLogout,
        handleLogoutRequest,
    }  = props;
    const { authUser } = useGlobals();
    
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
                            {authUser ? (
                            <Box className={"hover-line"}>
                                <NavLink to="/orders" activeClassName={"underline"}>Orders</NavLink>
                            </Box>
                            ) : null} 
                            {authUser ? (
                            <Box className={"hover-line"}>
                                <NavLink to="/member-page" activeClassName={"underline"}>My page</NavLink>
                            </Box>      
                            ) : null}        
                            <Box className={"hover-line"}>
                                <NavLink to="/help" activeClassName={"underline"}>Help</NavLink>
                            </Box>
                            <Basket 
                            />  
                            {!authUser ? (
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
                                <img    src={
                                            authUser?.memberImage 
                                            ? `${serverApi}/${authUser?.memberImage}`
                                            : "/icons/default-user.svg" 
                                        } 
                                        aria-haspopup={"true"} 
                                        className="user-avatar"
                                        onClick={handleLogoutClick}
                                        />
                                        )}

                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={Boolean(anchorEl)}
                            onClose={handleCloseLogout}
                            onClick={handleCloseLogout}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleLogoutRequest}>
                                <ListItemIcon>
                                    <Logout fontSize="small" style={{ color: 'blue' }} />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                                        
                        </Stack>
                    </Stack>

                    <Stack className="header-frame">
                        <Stack className="detail"> 
                            <Box className="head-main-txt">World's Most Delicious Cousine</Box>
                            <Box className="welcome-txt">The Choice, not just a choice</Box>
                            <Box className="service-txt">24 hours service</Box>
                            <Box className="signup">
                                {!authUser ?  
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