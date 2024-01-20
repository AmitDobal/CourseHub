import axios from "axios";
import baseurl from "../../config/index.js";

const getCoursesService = () => axios.get(`${baseurl}/api/v1/courses`);

export default getCoursesService;
