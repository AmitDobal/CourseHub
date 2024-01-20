import { Box } from "@mui/material";
import React, { useEffect } from "react";
import CourseFilter from "./CourseFilter";
import { useStyles } from "./CourseStyles";
import { useDispatch, useSelector } from "react-redux";
import getCourseAction from "../../module/course/courseAction.js";
import { getCoursesSelector } from "../../module/course/courseSelector.js";
import CourseList from "./CourseList.jsx";

const CourseContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseAction());
  }, [dispatch]);

  const courses = useSelector(getCoursesSelector);
  // console.log(courses);
  return (
    <Box sx={useStyles.courseContainer}>
      <CourseFilter />
      <Box sx={useStyles.courseList}>
        <CourseList courses={courses} />
      </Box>
    </Box>
  );
};

export default CourseContainer;
