import React from "react";
// import MuiNextLink from "./MuiNextLink";
import { AppBar, Grid, Toolbar } from "@mui/material";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import cmplogo from "../../../Images/logo_new.png";
import { Container } from "@mui/material";
import MuiNextLink from "../header/MuiNextLink";

const Navbar = ({ navLinks }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
      <AppBar>
        <Toolbar
          component="nav"
          sx={{
            display: { xs: `none`, md: `flex` },
          }}
          // sx={{ bgcolor: "rgb(137, 205, 217) ", height: 30, alignItems: "normal" }}
        >
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Stack direction="row" sx={{ paddingTop: 2 }} alignItems="start">
                <Image
                  src={cmplogo}
                  alt="logo_new "
                  height="100"
                  width="80"
                  onClick={handleClick}
                  Home
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack direction="row" spacing={4}>
                {navLinks.map(({ title, path, label }, i) => (
                  <MuiNextLink
                    key={`${title}${i}`}
                    href={path}
                    variant="button"
                    sx={{ color: `white`, opacity: 0.7 }}
                    label={label}
                    styleClass="Navbar"
                  >
                    {title}
                  </MuiNextLink>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
