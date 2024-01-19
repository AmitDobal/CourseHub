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
  import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
  import LockIcon from "@mui/icons-material/Lock";
  
  const Login = () => {
    const [formInputs, setFormInputs] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  
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
            borderRadius: 5,
            padding: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            marginBottom: 5,
            flexDirection: "column",
            // backgroundColor:"#F8FFEA"
          }}>
          <Typography m={1} variant="h4">
            Hello, friend!
          </Typography>
          <Typography mb={1} variant="body1">
            Please login with your account
          </Typography>
          <form>
            <Grid container spacing={2}>
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
                  placeholder="Enter your password"
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
                    sx={{ background: "#393E46", borderRadius: 5 }}>
                    Sign in
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box>
                    <Typography variant="body1">
                      Don't have an account?
                    </Typography>
                  </Box>
                  <Box marginLeft={1}>
                    <Link to={"/register"}>Sign up</Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    );
  };
  
  export default Login;
  