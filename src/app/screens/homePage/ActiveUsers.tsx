import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider, Typography } from "@mui/joy/"
import AspectRatio from "@mui/joy/AspectRatio";
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';

const activeUsers = [
    { memberNick: "Martin", imagePath: "/img/martin.webp"},
    { memberNick: "Messi", imagePath: "/img/messi.webp"},
    { memberNick: "Sam", imagePath: "/img/sam.webp"},
    { memberNick: "Khabib", imagePath: "/img/khabib.webp"},
]

export default function ActiveUsers() {
    return (
    <div className="active-users-frame">
        <Container>
            <Stack className="main">
                <Box className="category-title">Active Users</Box>
                <Stack className="cards-frame">
                    <CssVarsProvider>
                    {activeUsers.length !== 0 ? (
                        activeUsers.map((ele, index) => {
                        return(
                        <Card key={index} variant="outlined" className={"card"}>
                            <CardOverflow>
                                <AspectRatio ratio={1}>
                                    <img src={ele.imagePath} alt="" />
                                </AspectRatio>
                            </CardOverflow>
                            <CardOverflow variant="soft" className="product-detail">
                                <Stack className="info">
                                    <Typography className="member-nickname">
                                        {ele.memberNick}
                                    </Typography>
                                </Stack>
                            </CardOverflow>
                        </Card>
                        );
                    })
                    ) : (
                        <Box className="no-data">No Active Users!</Box>
                    )}
                    </CssVarsProvider>
                </Stack>
            </Stack>
        </Container>
    </div>
    );
}