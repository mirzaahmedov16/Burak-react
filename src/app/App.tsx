
import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled"; // yoki component qayerda joylashgan bo'lsa

function App() {
  return (
    <Container sx={{ background: "orange" }}>
      <Stack flexDirection="column">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h4">
            Create React App on TypeScript with REDUX
          </Typography>
          </Box>
          <Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 2, my: 4 }}>
          <RippleBadge badgeContent={4} overlap="circular">
          <Button variant="contained"> Contained</Button>
          </RippleBadge>
        </Box>
        </Box>

       
      </Stack>
    </Container>
  );
}

export default App;