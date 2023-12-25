import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import { COLOR_GREYISH_BLACK, COLOR_GREYISH_BLACK_HOVER } from "../constants/colorConst";

const Register = () => {
  const [formInputs, setFormInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleFormInputs = (e) => {
    setFormInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
    // navigate('/login')
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}>
      <Box
        sx={{
          //   background: "#EEEEEE",
          borderRadius: 5,
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          marginBottom: 5,
          flexDirection: "column",
        }}>
        <Typography m={1} variant="h4">
          Hello, friend!
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                placeholder="First Name"
                type="text"
                name="firstname"
                onChange={handleFormInputs}
                value={formInputs.username}
                // label='First Name'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                type="text"
                fullWidth
                placeholder="Last Name"
                name="lastname"
                onChange={handleFormInputs}
                value={formInputs.username}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={handleFormInputs}
                value={formInputs.username}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                placeholder="Create password"
                name="password"
                onChange={handleFormInputs}
                value={formInputs.username}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={handleFormSubmit}
                  type="submit"
                  variant="contained"
                  sx={{
                    "&:hover": {
                      backgroundColor: COLOR_GREYISH_BLACK_HOVER,
                      color: "white",
                    },
                    background: COLOR_GREYISH_BLACK,
                    borderRadius: 5,
                  }}>
                  Create Account
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box>
                  <Typography variant="body1">
                    Already have an account?
                  </Typography>
                </Box>
                <Box marginLeft={1}>
                  <Link to={"/login"}>Sign in</Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
