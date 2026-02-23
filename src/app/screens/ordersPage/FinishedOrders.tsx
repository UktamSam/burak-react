import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";

export default function FinishedOrders() {
    return (
        <TabPanel value="3">
            <Stack>
                {[1, 2, 3].map((ele, index) => {
                    return (
                        <Box key={index} className="order-main-box">
                            <Box className="order-box-scroll">
                              {[1, 2].map((ele2, index2) => {
                                return (
                                    <Box key={index2} className="orders-name-price">
                                        <img 
                                            src="/img/lavash.webp"
                                            className="order-dish-img"
                                        />
                                        <p className="title-dish">Lavash</p>
                                        <Box className="price-box">
                                            <p>$9</p>
                                            <img 
                                                src="/icons/close.svg" 
                                                style={{ marginLeft: "5px"}}
                                            />
                                            <p style={{ marginLeft: "5px"}}>2</p>
                                            <img 
                                                src="/icons/pause.svg" 
                                                style={{ marginLeft: "5px"}}
                                            />
                                            <p style={{ marginLeft: "10px"}}>$18</p>
                                        </Box>
                                    </Box>
                                )
                              })}
                            </Box>
                            <Box className="total-price-box">
                                <Box className="box-total">
                                    <p>Product price</p>
                                    <p>$27</p>
                                    <img 
                                        src="/icons/plus.svg" 
                                        style={{marginLeft: "20px"}}
                                    />
                                    <p>Delivery cost</p>
                                    <p>$5</p>
                                    <img 
                                        src="/icons/pause.svg" 
                                        style={{marginLeft: "20px"}}
                                    />
                                    <p>Total</p>
                                    <p>$32</p>
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
                {false && (
                    <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                        <img 
                            src="/icons/noimage-list.svg" 
                            style={{ width: 400, height: 400}}
                        />
                    </Box>
                )}
            </Stack>
        </TabPanel>

    )
}