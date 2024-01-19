import { Box } from "@mui/material";
import React from "react";
import CourseFilter from "./CourseFilter";
import { useStyles } from "./CourseStyles";

const CourseContainer = () => {
  return (
    <Box sx={useStyles.courseContainer}>
      <CourseFilter />
      <Box sx={useStyles.courseList} >Here will display all Courses.</Box>
    </Box>
  );
};

export default CourseContainer;
