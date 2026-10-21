import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";

function App() {
  return (
    <Container sx={{ background: "green" }}>
      <Stack direction="column">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Create React App on TypeScript with REDUX LETS DO IT
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={13}>
            <Button variant="contained">Confirmed</Button>

            <Button variant="contained">Accepted</Button>
          </RippleBadge>
        </Box>

      </Stack>
    </Container>
  );
}

export default App;
