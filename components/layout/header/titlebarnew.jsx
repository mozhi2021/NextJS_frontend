import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuIcon from "@mui/icons-material/Menu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Divider } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Menu } from "@mui/material";
import Cdate from "./currentdate";
import Positionedmenu from "../header/positionedmenu";
import { Router } from "next/router";

export default function Titlebar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick1 = (event) => {
    //this is for onclick phone number
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);

  const handleClick2 = (event) => {
    //this is for onclick date
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  const [anchorE3, setAnchorE3] = React.useState(null);
  const open3 = Boolean(anchorE3);

  const handleClick3 = (event) => {
    //this is for onclick time
    setAnchorE3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };

  return (
    <AppBar
      sx={{ bgcolor: "rgb(18, 131, 172) ", height: 30, alignItems: "normal" }}
      position="sticky"
    >
      <Toolbar sx={{ alignItems: "baseline" }}>
        <Container>
          <Grid container className="titlebar">
            <Grid item xs={5}>
              <Stack
                direction="row"
                sx={{ justifyContent: "left" }}
                alignItems="start"
                spacing={1}
              >
                <div className="timeIcon">
                  <AccessTimeIcon />
                  Mon-Fri 09:00-17:00
                </div>

                <div className="bigscreentime">
                  <AccessTimeIcon
                    id="demo-showing-time"
                    aria-controls={open ? "demo-time-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick3}
                  />
                  <Menu
                    id="demo-showing-time"
                    aria-labelledby="demo-time-menu"
                    anchorE3={anchorE3}
                    open={open3}
                    onClose={handleClose3}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    sx={{ paddingLeft: "2px" }}
                  >
                    <div>Mon-Fri 09:00-17:00</div>
                  </Menu>
                </div>

                <Divider orientation="vertical" variant="middle" flexItem />
                {/* <Cdate /> */}

                <DateRangeIcon
                  id="demo-showing-date"
                  aria-controls={open ? "demo-date-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick2}
                />
                <Menu
                  id="demo-showing-date"
                  aria-labelledby="demo-date-menu"
                  anchorE2={anchorE2}
                  open={open2}
                  onClose={handleClose2}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  sx={{ paddingLeft: "2px" }}
                >
                  <div>
                    <Cdate />
                  </div>
                </Menu>

                <Stack>
                  <div className="daterange">
                    <Cdate />
                  </div>
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem />
              </Stack>
            </Grid>

            <Grid item xs={2}>
              <Stack
                direction="row"
                sx={{ justifyContent: "left" }}
                alignItems="start"
                spacing={1}
              >
                {/* <div className="bigscreenphone">
                  <LocalPhoneIcon />
                </div> */}
                {/* <LocalPhoneIcon /> */}

                <Divider orientation="vertical" flexItem />

                <LocalPhoneIcon
                  id="demo-showing-number"
                  aria-controls={open ? "demo-number-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick1}
                />
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose1}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  sx={{ paddingLeft: "2px" }}
                >
                  +91 904 332 0000
                </Menu>
                <Stack>
                  <div className="phonenumber">+91 904 332 0000</div>
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem />
              </Stack>
            </Grid>

            <Grid item xs={3}>
              <Stack
                direction="row"
                sx={{ justifyContent: "right" }}
                alignItems="end"
                spacing={1}
              >
                <Divider orientation="vertical" flexItem />
                <FacebookIcon />
                <Divider orientation="vertical" flexItem />
                <TwitterIcon />
                <Divider orientation="vertical" flexItem />

                <div className="menuButton">
                  <Positionedmenu cname="menuButton" />
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
