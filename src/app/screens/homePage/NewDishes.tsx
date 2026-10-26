import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import Divider from "../../components/divider";

function VisibilityIcon() {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ marginLeft: 5, verticalAlign: "middle" }}>
            <path d="M12 5c-5.2 0-9.4 4.1-11 7 1.6 2.9 5.8 7 11 7s9.4-4.1 11-7c-1.6-2.9-5.8-7-11-7Zm0 11.2a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Zm0-2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
        </svg>
    );
}

const newDishes = [
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
];

export default function NewDishes() {
    return (
        <div className={"new-products-frame"}>
            <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}>Fresh Menu</Box>
                    <Stack className={"cards-frame"}>
                        <CssVarsProvider>
                            {newDishes.length !== 0 ? (
                                newDishes.map((ele, index) => {
                                    return (
                                        <Card key={index} variant="outlined" className={"card"}>
                                            <CardOverflow>
                                                <div className="product-sale">Normal size</div>
                                                <AspectRatio ratio="1">
                                                    <img src={ele.imagePath} alt="" />
                                                </AspectRatio>
                                            </CardOverflow>

                                            <CardOverflow variant="soft" className="product-detail">
                                                <div className="info">
                                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                                        <Typography
                                                            className={"title"}
                                                            sx={{
                                                                display: "block",
                                                                overflow: "hidden",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                marginRight: "10px",
                                                            }}
                                                            noWrap
                                                        >
                                                            {ele.productName}
                                                        </Typography>
                                                        <Divider width="2" height="24" bg="#d9d9d9" />
                                                        <Typography className={"price"}>$12</Typography>
                                                    </div>
                                                    <div>
                                                        <Typography className={"views"}>
                                                            20
                                                            <VisibilityIcon />
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </CardOverflow>
                                        </Card>
                                    );
                                })
                            ) : (
                                <Box className="no-data">New products are not available!</Box>
                            )}
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}