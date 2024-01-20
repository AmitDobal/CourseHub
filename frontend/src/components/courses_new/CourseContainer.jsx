import { Box, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import CourseFilter from "./CourseFilter";
import { useStyles } from "./CourseStyles";
import { useDispatch, useSelector } from "react-redux";
import getCourseAction from "../../module/course/courseAction.js";
import {
  getCoursesSelector,
  getCoursePromiseSelector,
} from "../../module/course/courseSelector.js";
import CourseList from "./CourseList.jsx";

const CourseContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseAction());
  }, [dispatch]);

  const courses = useSelector(getCoursesSelector);
  const coursePromise = useSelector(getCoursePromiseSelector);
  // console.log(courses);
  return (
    <Box sx={useStyles.courseContainer}>
      <CourseFilter />
      <Box sx={useStyles.courseList}>
        {coursePromise.isPending && (
          <Box ml={5} >
            <Skeleton
              data-testid="course-loader"
              variant="rectangular"
              animation="pulse"
              width={"80%"}
              height={200}
            />
          </Box>
        )}
        {coursePromise.isErrorOcurred && (
          <div data-testid="course-error"> Error Message ...</div>
        )}
        {/* {coursePromise.isFullFilled && <CourseList courses={courses} />} */}
        <CourseList courses={courses} />
      </Box>
    </Box>
  );
};

export default CourseContainer;
