import React from "react";
import { AppBar, Button } from "@mui/material";
import { Badge } from "@mui/material";
import { Toolbar } from "@mui/material";

export default function Footer() {
  return (
    <AppBar
      sx={{
        bgcolor: "rgb(18, 131, 172) ",
        height: 200,
        alignItems: "text-top",
      }}
      position="static"
    >
      <Toolbar>
        
      </Toolbar>
    </AppBar>
  );
}
