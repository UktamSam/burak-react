import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import MemberService from "../../services/MemberService";
import { Member } from "../../../lib/types/member";
import { Order } from "../../../lib/types/orders";


/* REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({                           //DEFINE
  savePausedOrdersToStore: (data: Order[]) => dispatch(setPausedOrders(data)),
  saveProcessOrdersToStore: (data: Order[]) => dispatch(setProcessOrders(data)),
  saveFinishedOrdersToStore: (data: Order[]) => dispatch(setFinishedOrders(data)),
// 1 - (команда)                                   // 2 -  (Action из Redux)
});


export default function OrdersPage() {
  const [value, setValue] = useState<string>("1");

  /* HANDLERS */
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table-list"
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className="order-main-content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <div className="order-user-img">
                <img 
                  src="/icons/default-user.svg"
                  className="order-user-avatar"
                />
                <div className="order-user-icon-box">
                  <img 
                    src="/icons/user-badge.svg" 
                    className="order-user-prof-img" 
                  />
                </div>
              </div>
              <span className="order-user-name">Sam</span>
              <span className="order-user-prof">User</span>
            </Box>
            <Box className="liner"></Box>
            <Box className="order-user-address">
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
              </div>
              <div className="spec-address-txt">South Korea, Seoul, Gangnam 77</div>
            </Box>
          </Box>

          <Box className="order-info-box">
            <input 
              className="card-input" 
              type="text"
              name="cardNumber"
              placeholder="Card number: **** 7777 1111 ****"
            />
            <div className="card-middle">
              <input 
                className="card-half-input" 
                type="text"
                name="cardPeriod"
                placeholder="07 / 27"
              />
              <input 
                className="card-half-input" 
                type="text"
                name="cardCVV"
                placeholder="CVV : 777"
              />
            </div>
            <input 
              className="card-input" 
              type="text"
              name="cardCreator"
              placeholder="Sam Luter"
            />
            <div className="cards-box">
              <img src="/icons/western-card.svg" />
              <img src="/icons/paypal-card.svg" />
              <img src="/icons/visa-card.svg" />
              <img src="/icons/master-card.svg" />
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  )
}
