import axios from "axios";
import baseurl from "../../config/index.js";

export const getCoursesService = () => axios.get(`${baseurl}/api/v1/courses`);
export const getCoursesByNameService = (name) => axios.get(`${baseurl}/api/v1/courses/${name}`);

