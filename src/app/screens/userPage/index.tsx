import { Box, Container, Stack } from "@mui/material";
import FacebookIconModule from "@mui/icons-material/Facebook";
import InstagramIconModule from "@mui/icons-material/Instagram";
import TelegramIconModule from "@mui/icons-material/Telegram";
import YouTubeIconModule from "@mui/icons-material/YouTube";
import { Settings } from "./Settings";
import "../../../css/userPage.css";

const FacebookIcon = (FacebookIconModule as unknown as { default: typeof FacebookIconModule }).default;
const InstagramIcon = (InstagramIconModule as unknown as { default: typeof InstagramIconModule }).default;
const TelegramIcon = (TelegramIconModule as unknown as { default: typeof TelegramIconModule }).default;
const YouTubeIcon = (YouTubeIconModule as unknown as { default: typeof YouTubeIconModule }).default;

export default function UserPage() {
  return (
    <div className={"user-page"}>
      <Container>
        <Stack className={"my-page-frame"}>
          <Stack className={"my-page-left"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box className={"menu-name"}>Modify Member Details</Box>
              <Box className={"menu-content"}>
                <Settings />
              </Box>
            </Box>
          </Stack>

          <Stack className={"my-page-right"}>
            <Box className={"order-info-box"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <div className={"order-user-img"}>
                  <img
                    src={"/icons/default-user.svg"}
                    className={"order-user-avatar"}
                  />
                  <div className={"order-user-icon-box"}>
                    <img src={"/icons/user-badge.svg"} />
                  </div>
                </div>
                <span className={"order-user-name"}>Martin</span>
                <span className={"order-user-prof"}>User</span>
                <span className={"order-user-prof"}>No address</span>
              </Box>
              <Box className={"user-media-box"}>
                <FacebookIcon />
                <InstagramIcon />
                <TelegramIcon />
                <YouTubeIcon />
              </Box>
              <p className={"user-desc"}>No description</p>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
