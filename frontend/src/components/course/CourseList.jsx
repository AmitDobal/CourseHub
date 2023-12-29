import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import axios from "axios";
import { COURSES_END_POINT } from "../../constants/Links";
import { PacmanLoader } from "react-spinners";
import { COLOR_GREYISH_BLACK } from "../../constants/colorConst";
import baseUrl from "../../config";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const url = `${baseUrl + COURSES_END_POINT}`;
      console.log("url: ", url);
      const res = await axios.get(url);
      setCourses(res.data);
      setLoading(false);
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
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "50vh",
          }}>
          <PacmanLoader loading={loading} color={COLOR_GREYISH_BLACK} />
        </Box>
      ) : (
        <>
          <Grid
            container
            spacing={2}
            sx={{
              pl: 7,
            }}>
            {courses.map((course) => (
              <Grid key={course.id} item xs={12} sm={6} md={4}>
                <CourseCard key={course.id} course={course} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default CourseList;
