import { AppBar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import {
  COLOR_BLUEISH_DARK_FOOTER,
  COLOR_GREYISH_BLACK,
} from "../constants/colorConst";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <footer>
      <Box component='footer' p={2} textAlign="center"
        position="static" bgcolor="primary.main" color="white"
        sx={{ background: COLOR_GREYISH_BLACK, height: 50 }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Typography>Cours0</Typography>
          </Box>
          <Box>
            <Typography>©2023 Cours0, Inc.</Typography>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
