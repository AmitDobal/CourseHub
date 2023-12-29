import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { COLOR_GREYISH_BLACK } from "../constants/colorConst";

const pages = ["Courses", "Pricing"];
const settings = [
  "Profile",
  "Account",
  "Dashboard",
  "Logout",
  "Login",
  "Register",
];

const Nav = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    navigate(`/${page}`)
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    navigate(`/${setting}`);
  };

  const handlePagesButton = (e) => {
    navigate(`/${e.target.name}`);
  };

  const handleLoginRegisterButtonClick = (e) => {
    navigate(`/${e.currentTarget.name}`)
  };

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      color: inherit;
    }
  `;

  return (
    <AppBar position="static" sx={{ backgroundColor: "#393E46" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SelfImprovementIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <StyledLink to={"/"} component="div">
            <Typography
              variant="h6"
              noWrap
              component="a"
              // href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              COURS0
            </Typography>
          </StyledLink>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SelfImprovementIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            COURS0
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                name={page}
                onClick={handlePagesButton}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>
          <Stack direction={"row"} spacing={1}>
            <Button
              onClick={handleLoginRegisterButtonClick}
              type="button"
              color="inherit"
              variant="outlined"
              name="login"
              sx={{
                "&:hover": { backgroundColor: "white", color: "black" },
                color: "white",
                borderRadius: 5,
                minWidth: "100px",
              }}>
              Log In
            </Button>

            <Button
              onClick={handleLoginRegisterButtonClick}
              type="button"
              variant="outlined"
              color="inherit"
              name="register"
              sx={{
                "&:hover": {
                  backgroundColor: COLOR_GREYISH_BLACK,
                  color: "white",
                },
                background: "white",
                borderRadius: 5,
                color: "black",
                minWidth: "100px",
              }}>
              Sign up
            </Button>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Anonymous" src="/" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
