import React from "react";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import MuiNextLink from "./MuiNextLink";
import MuiNextLink from "../header/MuiNextLink";

import Home from "../../../pages";
import Contactus from "../../../pages/contactus";
import AboutUs from "../../../pages/aboutus";
import OurServices from "../../../pages/ourservices";

function Positionedmenu(props) {
  const { cname } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={cname}>
      <MenuIcon
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          <MuiNextLink
            key={`${Home}`}
            href={`/`}
            variant="button"
            sx={{ color: `white`, opacity: 0.7 }}
            label={Home}
            styleClass="Navbar"
          >
            Home
          </MuiNextLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MuiNextLink
            key={`${AboutUs}`}
            href={`/aboutus`}
            variant="button"
            sx={{ color: `white`, opacity: 0.7 }}
            label={AboutUs}
            styleClass="Navbar"
          >
            About Us
          </MuiNextLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <MuiNextLink
            key={`${OurServices}`}
            href={`/ourservices`}
            variant="button"
            sx={{ color: `white`, opacity: 0.7 }}
            label={OurServices}
            styleClass="Navbar"
          >
            Our Services
          </MuiNextLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <MuiNextLink
            key={`${Contactus}`}
            href={`/contactus`}
            variant="button"
            sx={{ color: `white`, opacity: 0.7 }}
            label={Contactus}
            styleClass="Navbar"
          >
            Contact Us
          </MuiNextLink>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Positionedmenu;
