import {
  COURSES_BY_NAME_ACTION_TYPE,
  COURSE_LIST_ACTION_TYPE,
  COURSE_LIST_ERROR_ACTION_TYPE,
  COURSE_LIST_FULFILLED_ACTION_TYPE,
  COURSE_LIST_PENDING_ACTION_TYPE,
} from "./courseActionTypes.js";

export const INITIAL_COURSE_REDUCER_STATE = {
  courses: [],
  promise: {
    isPending: false,
    isFullFilled: false,
    isErrorOcurred: false,
  },
};

export const courseReducer = (state = INITIAL_COURSE_REDUCER_STATE, action) => {
  switch (action.type) {
    case COURSE_LIST_ACTION_TYPE: {
      return {
        ...state,
        courses: action.payload,
      };
    }
    case COURSES_BY_NAME_ACTION_TYPE: {
      return {
        ...state,
        courses: action.payload,
      };
    }
    case COURSE_LIST_PENDING_ACTION_TYPE: {
      return {
        ...state,
        promise: {
          isPending: true,
          isFullFilled: false,
          isErrorOcurred: false,
        },
      };
    }
    case COURSE_LIST_ERROR_ACTION_TYPE: {
      return {
        ...state,
        promise: {
          isPending: false,
          isFullFilled: false,
          isErrorOcurred: true,
        },
      };
    }
    case COURSE_LIST_FULFILLED_ACTION_TYPE: {
      return {
        ...state,
        promise: {
          isPending: false,
          isFullFilled: true,
          isErrorOcurred: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
