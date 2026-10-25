import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";

function VisibilityIcon() {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="25" height="25" fill="currentColor" style={{ marginLeft: 5, verticalAlign: "middle" }}>
            <path d="M12 5c-5.2 0-9.4 4.1-11 7 1.6 2.9 5.8 7 11 7s9.4-4.1 11-7c-1.6-2.9-5.8-7-11-7Zm0 11.2a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Zm0-2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
        </svg>
    );
}

function DescriptionOutlinedIcon() {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
            <path d="M6 2h8l5 5v15H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 2v4h4M8 12h8M8 16h8M8 19h6" />
        </svg>
    );
}

const list = [
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function PopularDishes() {
    return (
        <div className="popular-dishes-frame">
            <Container>
                <Stack className="popular-section">
                    <Box className="category-title">Popular Dishes</Box>
                    <Stack className="cards-frame">
                        {list.map((ele, index) => (
                            <CssVarsProvider key={index}>
                                <Card className="card">
                                    <CardCover>
                                        <img src={ele.imagePath} alt="" />
                                    </CardCover>
                                    <CardCover className="card-cover" />
                                    <CardContent sx={{ justifyContent: "flex-end" }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography
                                                level="h2"
                                                sx={{ fontSize: "lg", color: "#fff", mb: 1 }}
                                            >
                                                {ele.productName}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontWeight: "md",
                                                    color: "neutral.300",
                                                    alignItems: "flex",
                                                }}
                                            >
                                                20
                                                <VisibilityIcon />
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardOverflow
                                        sx={{
                                            display: "flex",
                                            gap: 1.5,
                                            py: 1.5,
                                            px: "var(--Card-padding)",
                                            borderTop: "1px solid",
                                            height: "60px",
                                        }}
                                    >
                                        <Typography
                                            startDecorator={<DescriptionOutlinedIcon />}
                                            textColor="neutral.300"
                                        >
                                            This is delicious meal
                                        </Typography>
                                    </CardOverflow>
                                </Card>
                            </CssVarsProvider>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}
