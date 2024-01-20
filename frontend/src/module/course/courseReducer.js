import { COURSE_LIST_ACTION_TYPE } from "./courseActionTypes.js";

export const INITIAL_COURSE_REDUCER_STATE = {
  courses: [],
};

export const courseReducer = (state = INITIAL_COURSE_REDUCER_STATE, action) => {
  switch (action.type) {
    
    case COURSE_LIST_ACTION_TYPE: {
      return {
        ...state,
        courses: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
