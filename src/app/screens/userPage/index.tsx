import { Box, Container, Stack } from "@mui/material";
import FacebookIconModule from "@mui/icons-material/Facebook";
import InstagramIconModule from "@mui/icons-material/Instagram";
import TelegramIconModule from "@mui/icons-material/Telegram";
import YouTubeIconModule from "@mui/icons-material/YouTube";
import { Settings } from "./Settings";
import { useHistory } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";
import "../../../css/userPage.css";
import { serverApi } from "../../../lib/config";
import { MemberType } from "../../../lib/enums/member.enum";

const FacebookIcon = (FacebookIconModule as unknown as { default: typeof FacebookIconModule }).default;
const InstagramIcon = (InstagramIconModule as unknown as { default: typeof InstagramIconModule }).default;
const TelegramIcon = (TelegramIconModule as unknown as { default: typeof TelegramIconModule }).default;
const YouTubeIcon = (YouTubeIconModule as unknown as { default: typeof YouTubeIconModule }).default;

export default function UserPage() {
  const history = useHistory();
  const { authMember } = useGlobals();

  if(!authMember) history.push("/");
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
                    src={
                      authMember?.memberImage
                        ? `${serverApi}/${authMember.memberImage}`
                        : "/icons/user-badge.svg"}
                    className={"order-user-avatar"}
                  />
                  <div className={"order-user-icon-box"}>
                    <img src={
                      authMember?.memberType === MemberType.RESTAURANT
                        ? "/icons/restaurant.svg"
                        : "/icons/user-badge.svg"
                      } 
                    />
                  </div>
                </div>
                <span className={"order-user-name"}>{authMember?.memberNick}</span>
                <span className={"order-user-prof"}>{authMember?.memberType}</span>
                <span className={"order-user-prof"}>
                  {authMember?.memberAddress 
                    ? authMember.memberAddress 
                    : "no address"
                  }
                </span>
              </Box>
              <Box className={"user-media-box"}>
                <FacebookIcon />
                <InstagramIcon />
                <TelegramIcon />
                <YouTubeIcon />
              </Box>
              <p className={"user-desc"}>
                {authMember?.memberDesc
                  ? authMember.memberDesc
                  : "no description"
                }</p>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
