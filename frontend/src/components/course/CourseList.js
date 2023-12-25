import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { coursesData } from "./coursesData";
import axios from "axios";

// const courses = coursesData;

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const url = "http://localhost:8080/courses";
      const res = await axios.get(url);
      setCourses(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("ERRORRR GETCOURSES: ", error.message);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <Grid
        container
        spacing={2}
        sx={{
          pl: 7,
        }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4}>
            <CourseCard key={course.id} course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseList;
