import { Box } from "@mui/material";
import React from "react";
import Layout from "../components/layout/Layout";
import CourseContainer from "../components/courses_new/CourseContainer";

const Home = () => {
  return (
    <Box>
      <Layout>
        <CourseContainer/>
      </Layout>
      
    </Box>
  );
};

export default Home;
