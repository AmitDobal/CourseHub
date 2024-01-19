// CourseFilter.js
import { Paper } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import { useStyles } from "./CourseStyles";

const CourseFilter = () => {
  return (
    <Box sx={useStyles.courseFilter}>
      <Paper sx={useStyles.courseFilterPaper}>Course filter</Paper>
    </Box>
  );
};

export default CourseFilter;
