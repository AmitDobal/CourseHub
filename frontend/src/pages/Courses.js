import { Box } from "@mui/material";
import React from "react";
import CourseList from "../components/course/CourseList";

const Courses = () => {
  return (
    <Box sx={{ m: 2 }}>
      <CourseList />
    </Box>
  );
};

export default Courses;
