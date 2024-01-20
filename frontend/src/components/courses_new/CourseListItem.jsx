import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Avatar, Paper, Typography } from "@mui/material";
import { useStyles } from "./CourseStyles";

const propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
  }).isRequired,
};

const CourseListItem = ({ course }) => {
  return (
    <Box mb={2}>
      <Paper elevation={2} sx={useStyles.courseListItemPaper} >
        <Avatar sx={useStyles.courseImage} variant="square">{course.id}</Avatar>
        <Box ml={1}>
          <Typography variant="h5">{course.name}</Typography>
          <Typography >{course.description}</Typography>
          <Typography >{course.instructor}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

CourseListItem.propTypes = propTypes;

export default CourseListItem;
