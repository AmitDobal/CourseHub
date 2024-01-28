import {
  COURSES_BY_NAME_ACTION_TYPE,
  COURSE_LIST_ACTION_TYPE,
  COURSE_LIST_ERROR_ACTION_TYPE,
  COURSE_LIST_FULFILLED_ACTION_TYPE,
  COURSE_LIST_PENDING_ACTION_TYPE,
} from "./courseActionTypes.js";
import {getCoursesByNameService, getCoursesService} from "./courseService.js";

export const getCourseAction = () => async (dispatch) => {
  try {
    dispatch({ type: COURSE_LIST_PENDING_ACTION_TYPE });
    const courses = await getCoursesService();
    dispatch({
      type: COURSE_LIST_ACTION_TYPE,
      payload: courses.data,
    });
    dispatch({ type: COURSE_LIST_FULFILLED_ACTION_TYPE });
  } catch (error) {
    console.log(error);
    dispatch({ type: COURSE_LIST_ERROR_ACTION_TYPE });
  }
};

export const getCourseByNameAction = (name) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_LIST_PENDING_ACTION_TYPE });
    const courses = await getCoursesByNameService(name);
    console.log(courses)
    dispatch({
      type: COURSES_BY_NAME_ACTION_TYPE,
      payload: courses.data,
    });
    dispatch({ type: COURSE_LIST_FULFILLED_ACTION_TYPE });
  } catch (error) {
    console.log(error);
    dispatch({ type: COURSE_LIST_ERROR_ACTION_TYPE });
  }
};

