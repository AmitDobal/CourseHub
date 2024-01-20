import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { useStyles } from "./CourseStyles";
import CourseListItem from "./CourseListItem";

const propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      instructor: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const CourseList = ({ courses }) => {
  return (
    <Box sx={useStyles.courseList} ml={5}>
      {courses.map((course) => (
        <CourseListItem key={course.id} course={course} />
      ))}
    </Box>
  );
};

CourseList.propTypes = propTypes;

export default CourseList;
