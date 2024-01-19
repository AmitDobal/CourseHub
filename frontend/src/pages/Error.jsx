import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        alignContent: "center",
        flexDirection:'column'
      }}>
      <Typography variant="h2">404</Typography>
      <Typography variant="h4">Oops!! Page not found</Typography>
    </Container>
  );
};

export default Error;
