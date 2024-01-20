import { COURSE_LIST_ACTION_TYPE } from "./courseActionTypes.js";
import getCoursesService from "./courseService.js";

const getCourseAction = () => async (dispatch) => {
  try {
    const courses = await getCoursesService();
    // console.log("COURSE ACTION FETCH", courses.data)
    dispatch({
      type: COURSE_LIST_ACTION_TYPE,
      payload: courses.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getCourseAction;
