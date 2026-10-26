import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIconModule from "@mui/icons-material/Visibility";
import DescriptionOutlinedIconModule from "@mui/icons-material/DescriptionOutlined";

const VisibilityIcon = (VisibilityIconModule as unknown as { default: typeof VisibilityIconModule }).default;
const DescriptionOutlinedIcon = (DescriptionOutlinedIconModule as unknown as { default: typeof DescriptionOutlinedIconModule }).default;

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
                    <CssVarsProvider>
                        <Stack className="cards-frame">
                            {list.length > 0 ? (
                                list.map((ele, index) => (
                                    <Card className="card" key={index}>
                                        <CardCover>
                                            <img src={ele.imagePath} alt={ele.productName} />
                                        </CardCover>
                                        <CardCover className="card-cover" />
                                        <CardContent sx={{ justifyContent: "flex-end" }}>
                                            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                                                <Typography
                                                    level="h2"
                                                    textColor="#fff"
                                                    sx={{ fontSize: "lg", mb: 1 }}
                                                >
                                                    {ele.productName}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontWeight: "md",
                                                        color: "neutral.300",
                                                        alignItems: "center",
                                                        display: "flex",
                                                    }}
                                                >
                                                    20
                                                    <VisibilityIcon sx={{ fontSize: 25, marginLeft: "5px" }} />
                                                </Typography>
                                            </Stack>
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
                                ))
                            ) : (
                                <Box className="no-data">Popular dishes are not available!</Box>
                            )}
                        </Stack>
                    </CssVarsProvider>
                </Stack>
            </Container>
        </div>
    );
}
