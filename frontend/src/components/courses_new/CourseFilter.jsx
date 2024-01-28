// CourseFilter.js
import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { useStyles } from "./CourseStyles";
import { getCourseByNameAction } from "../../module/course/courseAction";
import { useDispatch } from "react-redux";

const CourseFilter = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleSearchButton = () => {
    dispatch(getCourseByNameAction(searchText));
  };
  return (
    <Box sx={useStyles.courseFilter}>
      <Paper sx={useStyles.courseFilterPaper}>
        <Typography>Search Course Filters</Typography>
        <Box pt={3} mb={2}>
          <TextField
            placeholder="Enter course name"
            id="course-search"
            data-testid="course-name-input"
            label="Enter course name"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
          />
        </Box>
        <Button
          onClick={handleSearchButton}
          variant="contained"
          color="primary">
          Search
        </Button>
      </Paper>
    </Box>
  );
};

export default CourseFilter;
