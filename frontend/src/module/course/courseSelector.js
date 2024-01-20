export const getCoursesSelector = (rootReducer) =>
  rootReducer.courseReducer.courses;
export const getCoursePromiseSelector = (rootReducer) =>
  rootReducer.courseReducer.promise;
