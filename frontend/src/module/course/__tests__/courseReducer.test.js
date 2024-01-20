import { COURSE_LIST_ACTION_TYPE } from "../courseActionTypes";
import { INITIAL_COURSE_REDUCER_STATE, courseReducer } from "../courseReducer";

describe("courseReducer", () => {
  it("should return right new state", () => {
    const action = {
      type: COURSE_LIST_ACTION_TYPE,
      payload: [
        {
          id: 1,
          name: "test title",
          description: "des",
        },
      ],
    };

    const newState = courseReducer(INITIAL_COURSE_REDUCER_STATE, action);

    expect(newState).toEqual({
      courses: [
        {
          id: 1,
          name: "test title",
          description: "des",
        },
      ],
    });
  });
});
