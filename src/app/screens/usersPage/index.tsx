import { Box, Container, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Settings } from "./Settings";
import { useHistory } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";
import "../../../css/userPage.css";
import { serverApi } from "../../../lib/config";
import { MemberType } from "../../../lib/enums/member.enum";

export default function UserPage() {
  const history = useHistory();
  const { authUser } = useGlobals();
  if (!authUser) {
    history.push("/");
  }
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
                      authUser?.memberImage
                        ? `${serverApi}/${authUser.memberImage}`
                        : "/icons/default-user.svg"
                    }
                    className={"order-user-avatar"}
                  />
                  <div className={"order-user-icon-box"}>
                    <img
                      src={
                        authUser?.memberType === MemberType.USER
                          ? "/icons/user-badge.svg"
                          : "/icons/restaurant.svg"
                      }
                    />
                  </div>
                </div>
                <span className={"order-user-name"}>
                  {authUser?.memberNick}
                </span>
                <span className={"order-user-prof"}>
                  {authUser?.memberType}
                </span>
                <span className={"order-user-prof"}>
                  {authUser?.memberAddress
                    ? authUser?.memberAddress
                    : "No Address"}
                </span>
              </Box>
              <Box className={"user-media-box"}>
                <FacebookIcon />
                <InstagramIcon />
                <TelegramIcon />
                <YouTubeIcon />
              </Box>
              <p className={"user-desc"}>
                {authUser?.memberDesc ? authUser.memberDesc : "No description "}
              </p>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
